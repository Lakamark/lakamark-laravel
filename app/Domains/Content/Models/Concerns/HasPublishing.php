<?php

namespace App\Domains\Content\Models\Concerns;

use App\Domains\Content\Enums\PublishStatus;
use Illuminate\Database\Eloquent\Builder;

trait HasPublishing
{
    public function isPublished(): bool
    {
        return $this->status === PublishStatus::Published
            && $this->published_at !== null
            && $this->published_at->isPost();
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query
            ->where('status', PublishStatus::Published)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now());
    }
}
