<?php

use App\Models\User;

it('allows authenticated users to access the account page', function (): void {
    $user = User::factory()->create();

    $this
        ->actingAs($user)
        ->get(route('account.index'))
        ->assertOk();
});

it('redirects guests to the login page', function (): void {
    $this
        ->get(route('dashboard.index'))
        ->assertRedirect(route('login'));
});
