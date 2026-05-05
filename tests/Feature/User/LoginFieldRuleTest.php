<?php

use App\Rules\User\LoginFieldRule;
use Illuminate\Support\Facades\Validator;

it('accepts email', function () {
    $validator = Validator::make(
        ['identifier' => 'test@example.com'],
        ['identifier' => [new LoginFieldRule]]
    );

    expect($validator->passes())->toBeTrue();
});

it('accepts username', function () {
    $validator = Validator::make(
        ['identifier' => 'marc_123'],
        ['identifier' => [new LoginFieldRule]]
    );

    expect($validator->passes())->toBeTrue();
});

it('rejects invalid value', function () {
    $validator = Validator::make(
        ['identifier' => '!!!'],
        ['identifier' => [new LoginFieldRule]]
    );

    expect($validator->fails())->toBeTrue();
});
