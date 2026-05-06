<?php

namespace App\Domains\Media\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Media extends Model
{
    protected $fillable = [
        'path',
        'alt',
        'type',
    ];

    public function mediable(): MorphTo
    {
        return $this->morphTo();
    }
}
