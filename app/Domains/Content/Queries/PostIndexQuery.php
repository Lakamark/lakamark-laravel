<?php

namespace App\Domains\Content\Queries;

use App\Domains\Blog\Models\Post;
use App\Domains\Content\Shared\Queries\AbstractQuery;
use Illuminate\Database\Eloquent\Builder;

/**
 * Post index query.
 *
 * Responsibilities:
 * - Build the post listing query
 * - Apply dashboard filters
 * - Encapsulate post visibility logic
 * - Keep controllers lightweight
 */
readonly class PostIndexQuery extends AbstractQuery
{
    /**
     * Build the post query.
     */
    public function build(): Builder
    {
        $query = Post::query();

        $this->applySearchFilter($query);
        $this->applyStatusFilter($query);
        $this->applyModerationFilter($query);

        return $query->latest();
    }

    /**
     * Apply search filtering.
     */
    protected function applySearchFilter(
        Builder $query,
    ): void {
        $this->whenFilled(
            $query,
            'search',
            function (Builder $query, string $search): void {
                $query->where(function (Builder $query) use ($search): void {
                    $query
                        ->where('title', 'like', "%{$search}%")
                        ->orWhere('slug', 'like', "%{$search}%");
                });
            }
        );
    }

    /**
     * Apply publication status filtering.
     */
    protected function applyStatusFilter(
        Builder $query,
    ): void {
        $this->whenFilled(
            $query,
            'status',
            fn (Builder $query, string $status): Builder => $query
                ->where('status', $status)
        );
    }

    /**
     * Apply moderation status filtering.
     */
    protected function applyModerationFilter(
        Builder $query,
    ): void {
        $this->whenFilled(
            $query,
            'moderation_status',
            fn (Builder $query, string $status): Builder => $query
                ->where('moderation_status', $status)
        );
    }
}
