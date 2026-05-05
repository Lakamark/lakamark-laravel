<?php

use App\Rules\User\UsernameFormatRule;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Validator;

uses(RefreshDatabase::class);

it('accepts valid username', function () {
    $validator = Validator::make(
        ['username' => 'marc_123'],
        ['username' => [new UsernameFormatRule]]
    );

    expect($validator->passes())->toBeTrue();
});

it('rejects invalid username', function () {
    $validator = Validator::make(
        ['username' => 'Marc!!!'],
        ['username' => [new UsernameFormatRule]]
    );

    expect($validator->fails())->toBeTrue();
});
