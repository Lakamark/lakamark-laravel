<?php

namespace App\Data\Shared;

use App\Domains\User\Role;
use App\Models\User;
use Spatie\LaravelData\Data;

final class UserData extends Data
{
    public function __construct(
        public int $id,
        public string $username,
        public Role $role,
        public ?string $theme,
        public string $language,
        public bool $isLogged,
        public bool $isStaff,
        public bool $canAccessDashboard,
    ) {}

    public static function fromModel(User $user): self
    {
        return new self(
            id: $user->id,
            username: $user->username,
            role: $user->role,
            theme: $user->theme,
            language: $user->language,
            isLogged: true,
            isStaff: $user->isStaff(),
            canAccessDashboard: $user->canAccessDashboard(),
        );
    }
}
