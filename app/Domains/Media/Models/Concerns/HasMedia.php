<?php

namespace App\Domains\Media\Models\Concerns;

use App\Domains\Media\Models\Media;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasMedia
{
    public function media(): MorphMany
    {
        return $this->morphMany(Media::class, 'mediable');
    }
}