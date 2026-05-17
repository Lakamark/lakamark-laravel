<?php

namespace App\Data\CMS\Posts;

use App\Domains\Content\Enums\PublishStatus;
use Spatie\LaravelData\Data;

final class PostFormData extends Data
{
    public function __construct(
        public ?int $id,
        public string $title,
        public string $slug,
        public ?string $excerpt,
        public string $content,
        public PublishStatus $status,
    ) {}
}
