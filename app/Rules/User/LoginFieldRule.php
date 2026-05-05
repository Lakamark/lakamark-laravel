<?php

namespace App\Rules\User;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

final class LoginFieldRule implements ValidationRule
{
    /**
     * Validate the given attribute.
     *
     * @param  Closure(string): void  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! is_string($value)) {
            $fail('The :attribute must be a valid string.');

            return;
        }

        $isEmail = filter_var($value, FILTER_VALIDATE_EMAIL);
        $isUsername = preg_match('/^[a-z0-9_]+$/', $value);

        if (! $isEmail && ! $isUsername) {
            $fail('The :attribute must be a valid email or username.');
        }
    }
}
