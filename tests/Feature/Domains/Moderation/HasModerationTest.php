<?php

use App\Domains\Blog\Models\Post;
use App\Domains\Moderation\Enums\ModerationStatus;
use App\Models\User;
use Carbon\CarbonImmutable;

it('approves a post', function (): void {
    $post = Post::factory()->create();
    $moderator = User::factory()->create();

    $post->approve($moderator);

    expect($post->isApproved())
        ->toBeTrue()
        ->and($post->moderated_by)->toBe($moderator->id)
        ->and($post->moderated_at)->not->toBeNull();
});

it('casts moderation status to enum', function (): void {
    $post = Post::factory()->create([
        'moderation_status' => ModerationStatus::Approved,
    ]);

    expect($post->moderation_status)
        ->toBeInstanceOf(ModerationStatus::class);
});

it('casts moderated_at to immutable datetime', function (): void {
    $post = Post::factory()->create([
        'moderated_at' => now(),
    ]);

    expect($post->moderated_at)
        ->toBeInstanceOf(CarbonImmutable::class);
});
