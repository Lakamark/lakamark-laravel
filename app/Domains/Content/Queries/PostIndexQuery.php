<?php

namespace App\Domains\Content\Queries;

use App\Domains\Blog\Models\Post;
use App\Domains\Content\Shared\Queries\AbstractQuery;
use Illuminate\Database\Eloquent\Builder;

readonly class PostIndexQuery extends AbstractQuery
{
    /**
     * Build the post query.
     */
    public function build(): Builder
    {
        $query = Post::query()->with(['author', 'moderator']);

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
            fn (Builder $query, string $search): Builder => $query
                ->where('title', 'like', "%{$search}%")
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
