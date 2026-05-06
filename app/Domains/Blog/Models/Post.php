<?php

namespace App\Domains\Blog\Models;

use App\Domains\Content\Enums\PublishStatus;
use App\Domains\Content\Models\Concerns\HasPublishing;
use App\Domains\Media\Models\Concerns\HasMedia;
use App\Models\User;
use Database\Factories\PostFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    /** @use HasFactory<PostFactory> */
    use HasFactory;

    use HasMedia;
    use HasPublishing;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'status',
        'user_id',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'status' => PublishStatus::class,
            'published_at' => 'immutable_datetime',
        ];
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected static function newFactory(): PostFactory
    {
        return PostFactory::new();
    }
}
