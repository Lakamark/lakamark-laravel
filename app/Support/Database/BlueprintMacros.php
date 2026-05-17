<?php

namespace App\Support\Database;

use App\Domains\Moderation\Enums\ModerationStatus;
use Illuminate\Database\Schema\Blueprint;

/**
 * Registers custom schema blueprint macros.
 */
class BlueprintMacros
{
    /**
     * Register custom schema macros.
     */
    public static function register(): void
    {
        Blueprint::macro('moderation', function (): void {
            /** @var Blueprint $this */
            $this->string('moderation_status')
                ->default(ModerationStatus::Pending->value);

            $this->foreignId('moderated_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $this->timestamp('moderated_at')
                ->nullable();

            $this->text('moderation_note')
                ->nullable();
        });
    }
}
