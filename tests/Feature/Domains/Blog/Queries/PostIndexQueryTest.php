<?php

use App\Domains\Blog\Models\Post;
use App\Domains\Content\Queries\PostIndexQuery;
use App\Domains\Moderation\Enums\ModerationStatus;
use Illuminate\Http\Request;

it('filters posts by moderation status', function (): void {
    $approved = Post::factory()->create([
        'moderation_status' => ModerationStatus::Approved,
    ]);

    Post::factory()->create([
        'moderation_status' => ModerationStatus::Pending,
    ]);

    $request = Request::create('/dashboard/posts', 'GET', [
        'moderation_status' => ModerationStatus::Approved->value,
    ]);

    $posts = app(PostIndexQuery::class, [
        'request' => $request,
    ])->build()->get();

    expect($posts)
        ->toHaveCount(1)
        ->first()->id->toBe($approved->id);
});
