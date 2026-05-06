<?php

namespace App\Concerns;

use App\Models\User;
use App\Rules\User\UsernameFormatRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Validation\Rule;

trait ProfileValidationRules
{
    /**
     * Get the validation rules used to validate user profiles.
     *
     * @return array<string, array<int, ValidationRule|array<mixed>|string>>
     */
    protected function profileRules(?int $userId = null): array
    {
        return [
            'name' => $this->nameRules(),
            'email' => $this->emailRules($userId),
            'username' => $this->usernameRules($userId),
        ];
    }

    /**
     * Get the validation rules used to validate user names.
     *
     * @return array<int, ValidationRule|array<mixed>|string>
     */
    protected function nameRules(): array
    {
        return ['required', 'string', 'max:255'];
    }

    /**
     * Get the validation rules used to validate user emails.
     *
     * @return array<int, ValidationRule|array<mixed>|string>
     */
    protected function emailRules(?int $userId = null): array
    {
        return [
            'required',
            'string',
            'email',
            'max:255',
            $userId === null
                ? Rule::unique(User::class)
                : Rule::unique(User::class)->ignore($userId),
        ];
    }

    /**
     * Get the validation rules used to validate a username.
     *
     * Handles both create and update scenarios.
     *
     * @param  int|null  $userId  The ID of the user to ignore during unique validation (for updates)
     * @return array<int, ValidationRule|string>
     */
    protected function usernameRules(?int $userId = null): array
    {
        $uniqueRule = Rule::unique(User::class, 'username');

        if ($userId !== null) {
            $uniqueRule->ignore($userId);
        }

        return [
            'required',
            'string',
            'min:3',
            'max:30',
            new UsernameFormatRule,
            $uniqueRule,
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'email' => strtolower($this->email),
            'username' => strtolower($this->username),
        ]);
    }
}
