<?php

namespace App\Domains\Blog\Models;

use App\Domains\Content\Enums\PublishStatus;
use App\Domains\Content\Models\Concerns\HasPublishing;
use App\Domains\Media\Models\Concerns\HasMedia;
use App\Domains\Media\Models\Media;
use App\Domains\Moderation\Concerns\HasModeration;
use App\Domains\Moderation\Enums\ModerationStatus;
use App\Models\User;
use Carbon\CarbonImmutable;
use Database\Factories\PostFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string|null $excerpt
 * @property string $content
 * @property PublishStatus $status
 * @property CarbonImmutable|null $published_at
 * @property int $user_id
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property ModerationStatus $moderation_status
 * @property int|null $moderated_by
 * @property CarbonImmutable|null $moderated_at
 * @property string|null $moderation_note
 * @property-read User $author
 * @property-read Collection<int, Media> $media
 * @property-read int|null $media_count
 * @property-read User|null $moderator
 * @method static PostFactory factory($count = null, $state = [])
 * @method static Builder<static>|Post newModelQuery()
 * @method static Builder<static>|Post newQuery()
 * @method static Builder<static>|Post published()
 * @method static Builder<static>|Post query()
 * @method static Builder<static>|Post whereContent($value)
 * @method static Builder<static>|Post whereCreatedAt($value)
 * @method static Builder<static>|Post whereExcerpt($value)
 * @method static Builder<static>|Post whereId($value)
 * @method static Builder<static>|Post whereModeratedAt($value)
 * @method static Builder<static>|Post whereModeratedBy($value)
 * @method static Builder<static>|Post whereModerationNote($value)
 * @method static Builder<static>|Post whereModerationStatus($value)
 * @method static Builder<static>|Post wherePublishedAt($value)
 * @method static Builder<static>|Post whereSlug($value)
 * @method static Builder<static>|Post whereStatus($value)
 * @method static Builder<static>|Post whereTitle($value)
 * @method static Builder<static>|Post whereUpdatedAt($value)
 * @method static Builder<static>|Post whereUserId($value)
 * @mixin Eloquent
 */
class Post extends Model
{
    /** @use HasFactory<PostFactory> */
    use HasFactory;

    use HasMedia;
    use HasModeration;
    use HasPublishing;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'status',
        'user_id',
        'published_at',
        'moderation_status',
        'moderated_at',
        'moderated_by',
        'moderation_note'
    ];

    protected function casts(): array
    {
        return [
            'status' => PublishStatus::class,
            'published_at' => 'immutable_datetime',
            'moderated_at' => 'immutable_datetime',
            'moderation_status' => ModerationStatus::class,
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
