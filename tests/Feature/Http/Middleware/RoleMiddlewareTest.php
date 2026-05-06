<?php

declare(strict_types=1);

use App\Domains\User\Role;
use App\Http\Middleware\RoleMiddleware;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

it('allows user with an authorized role', function (): void {
    $user = new User([
        'role' => Role::Admin->value,
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
        'moderator',
    );

    expect($response->getContent())
        ->toBe('OK');
});

it('denies user with an unauthorized role', function (): void {
    $user = new User([
        'role' => Role::User->value,
    ]);

    $request = Request::create('/dashboard/users');

    $request->setUserResolver(
        static fn (): User => $user,
    );

    $middleware = new RoleMiddleware;

    $middleware->handle(
        $request,
        static fn () => response('OK'),
        'admin',
    );
})->throws(HttpException::class);

it('denies unauthenticated users', function (): void {
    $request = Request::create('/dashboard/users');

    $middleware = new RoleMiddleware;

    $middleware->handle(
        $request,
        static fn () => response('OK'),
        'admin',
    );
})->throws(HttpException::class);
