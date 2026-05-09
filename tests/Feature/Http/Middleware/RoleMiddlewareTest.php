<?php

declare(strict_types=1);

use App\Domains\User\Role;
use App\Http\Middleware\RoleMiddleware;
use App\Models\User;
use Illuminate\Http\Request;

it('redirects user with an unauthorized role', function (): void {
    $user = User::factory()->make([
        'role' => Role::User,
    ]);

    $request = Request::create('/dashboard/users');

    $request->setUserResolver(
        static fn (): User => $user,
    );

    $middleware = new RoleMiddleware;

    $response = $middleware->handle(
        $request,
        static fn () => response('OK'),
        'admin',
    );

    expect($response->getStatusCode())
        ->toBe(302)
        ->and($response->headers->get('Location'))
        ->toContain('/account');
});
