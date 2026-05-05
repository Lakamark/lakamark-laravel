<?php

namespace App\Rules\User;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * Validates the format of a username.
 *
 * Rules:
 * - Only lowercase letters (a-z)
 * - Numbers (0-9)
 * - Underscores (_)
 */
final class UsernameFormatRule implements ValidationRule
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

        if (! preg_match('/^[a-z0-9_]+$/', $value)) {
            $fail('The :attribute may only contain lowercase letters, numbers, and underscores.');
        }
    }
}
