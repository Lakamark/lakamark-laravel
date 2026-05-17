<?php

namespace App\Data\CMS\Posts;

use App\Domains\Content\Enums\PublishStatus;
use App\Domains\Moderation\Enums\ModerationStatus;
use Carbon\Carbon;
use Spatie\LaravelData\Data;

final class PostTableData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public PublishStatus $status,
        public ModerationStatus $moderation_status,
        public ?Carbon $published_at,
    ) {}
}
