<?php

namespace Database\Seeders;

use App\Domains\Blog\Models\Post;
use App\Domains\Moderation\Enums\ModerationStatus;
use App\Models\User;
use Illuminate\Database\Seeder;

class PostModerationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $moderator = User::query()->first();

        Post::query()->each(function ($post) use ($moderator): void {
            $status = fake()->randomElement([
                ModerationStatus::Pending,
                ModerationStatus::Approved,
                ModerationStatus::Rejected,
            ]);

            $post->update([
                'moderation_status' => $status,
                'moderated_by' => $status !== ModerationStatus::Pending
                    ? $moderator?->id
                    : null,
                'moderated_at' => $status !== ModerationStatus::Pending
                    ? now()
                    : null,
                'moderation_note' => $status === ModerationStatus::Rejected
                    ? fake()->sentence()
                    : null,
            ]);
        });
    }
}
