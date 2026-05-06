<?php

namespace Database\Factories;

use App\Domains\Blog\Models\Post;
use App\Domains\Content\Enums\PublishStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence();

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => $this->faker->paragraph(),
            'content' => $this->faker->paragraph(5),
            'user_id' => User::factory(),
            'published_at' => null,
        ];
    }

    public function published(): static
    {
        return $this->state([
            'status' => PublishStatus::Published,
            'published_at' => now(),
        ]);
    }
}
