<?php

declare(strict_types=1);

namespace App\Domains\User;

/**
 * Represents the authorization role assigned to a user.
 *
 * Roles are used to:
 * - control dashboard access
 * - determine post-authentication redirects
 * - group staff capabilities
 */
enum Role: string
{
    case User = 'user';
    case Editor = 'editor';
    case Moderator = 'moderator';
    case Admin = 'admin';

    /**
     * Returns the default route name used after authentication
     * or when redirecting a user to their main application area.
     */
    public function homeRoute(): string
    {
        return match ($this) {
            self::Admin, self::Moderator => 'dashboard',
            self::Editor => 'dashboard.posts.index',
            self::User => 'account.index',
        };
    }

    /**
     * Determines whether the role can access the dashboard area.
     */
    public function canAccessDashboard(): bool
    {
        return match ($this) {
            self::Admin,
            self::Moderator,
            self::Editor => true,

            self::User => false,
        };
    }

    /**
     * Determines whether the role is considered a staff role.
     */
    public function isStaff(): bool
    {
        return $this !== self::User;
    }

    /**
     * Determines whether the current role matches one of the given roles.
     */
    public function isOneOf(Role ...$roles): bool
    {
        return in_array($this, $roles, true);
    }
}
