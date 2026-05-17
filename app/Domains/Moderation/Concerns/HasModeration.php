<?php

namespace App\Domains\Moderation\Concerns;

use App\Domains\Moderation\Enums\ModerationStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Adds moderation behavior to a model.
 *
 * Expected database columns:
 * - moderation_status
 * - moderated_by
 * - moderated_at
 * - moderation_note
 */
trait HasModeration
{
    /**
     * Get the moderator user.
     */
    public function moderator(): BelongsTo
    {
        return $this->belongsTo(
            User::class,
            'moderated_by',
        );
    }

    /**
     * Determine if the content is pending moderation.
     */
    public function isPending(): bool
    {
        return $this->moderation_status === ModerationStatus::Pending;
    }

    /**
     * Determine if the content is approved.
     */
    public function isApproved(): bool
    {
        return $this->moderation_status === ModerationStatus::Approved;
    }

    /**
     * Determine if the content is rejected.
     */
    public function isRejected(): bool
    {
        return $this->moderation_status === ModerationStatus::Rejected;
    }

    /**
     * Mark the content as approved.
     */
    public function approve(
        ?User $moderator = null,
        ?string $note = null,
    ): void {
        $this->forceFill([
            'moderation_status' => ModerationStatus::Approved,
            'moderated_by' => $moderator?->id,
            'moderated_at' => now(),
            'moderation_note' => $note,
        ])->save();
    }

    /**
     * Mark the content as rejected.
     */
    public function reject(
        ?User $moderator = null,
        ?string $note = null,
    ): void {
        $this->forceFill([
            'moderation_status' => ModerationStatus::Rejected,
            'moderated_by' => $moderator?->id,
            'moderated_at' => now(),
            'moderation_note' => $note,
        ])->save();
    }

    /**
     * Reset the moderation state.
     */
    public function resetModeration(): void
    {
        $this->forceFill([
            'moderation_status' => ModerationStatus::Pending,
            'moderated_by' => null,
            'moderated_at' => null,
            'moderation_note' => null,
        ])->save();
    }
}
