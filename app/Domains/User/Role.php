<?php

declare(strict_types=1);

namespace App\Domains\User;
/**
 * Represents the available application roles.
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
            self::User => 'home',
        };
    }
}
