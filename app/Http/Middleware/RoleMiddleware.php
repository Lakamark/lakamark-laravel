<?php

namespace App\Http\Middleware;

use App\Domains\User\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Restricts access to users having one of the allowed roles.
 *
 * Examples:
 * - role:admin
 * - role:admin,moderator
 */
class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(
        Request $request,
        Closure $next,
        string ...$allowedRoles,
    ): Response {
        $user = $request->user();

        if (! $user) {
            abort(Response::HTTP_UNAUTHORIZED);
        }

        $userRole = Role::tryFrom($user->role);

        if (! $userRole) {
            abort(Response::HTTP_UNAUTHORIZED);
        }

        $allowed = array_map(
            static fn (string $role): ?Role => Role::tryFrom($role),
            $allowedRoles,
        );

        if (! in_array($userRole, $allowed, true)) {
            abort(Response::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }
}
