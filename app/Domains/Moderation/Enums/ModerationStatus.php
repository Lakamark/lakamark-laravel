<?php

namespace App\Domains\Moderation\Enums;

enum ModerationStatus: string
{
    case Pending = 'pending';

    case Approved = 'approved';

    case Rejected = 'rejected';

    /**
     * Get the human-readable label.
     */
    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Pending',
            self::Approved => 'Approved',
            self::Rejected => 'Rejected',
        };
    }

    /**
     * Determine if the status is visible publicly.
     */
    public function isPublic(): bool
    {
        return $this === self::Approved;
    }

    /**
     * Determine if the content is awaiting moderation.
     */
    public function isPending(): bool
    {
        return $this === self::Pending;
    }

    /**
     * Get all available values.
     *
     * Useful for validation rules and filters.
     *
     * @return list<string>
     */
    public static function values(): array
    {
        return array_column(
            self::cases(),
            'value',
        );
    }

    /**
     * Get filter options.
     *
     * @return array<string, string>
     */
    public static function options(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn (self $status): array => [
                $status->value => $status->label(),
            ])
            ->all();
    }
}
