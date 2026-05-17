<?php

namespace App\Data\CMS\Posts;

use App\Domains\Content\Enums\PublishStatus;
use App\Domains\Moderation\Enums\ModerationStatus;
use Carbon\Carbon;
use Spatie\LaravelData\Data;

final class ModeratedPostData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public ?string $excerpt,
        public string $content,

        public PublishStatus $status,
        public ModerationStatus $moderation_status,

        public ?string $moderation_note,

        public ?Carbon $published_at,
        public ?Carbon $moderated_at,

        public int $user_id,
        public ?int $moderated_by,
    ) {}
}
