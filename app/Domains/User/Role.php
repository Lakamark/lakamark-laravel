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
}
