<?php

namespace App\Domains\Blog\Actions;

use App\Domains\Blog\Models\Post;
use App\Domains\Shared\Actions\AbstractAction;
use Auth;

readonly class StorePostAction extends AbstractAction
{
    /**
     * Store a new post.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function handle(
        array $attributes,
    ): Post {
        return $this->transaction(function () use ($attributes): Post {
            return Post::query()->create([
                ...$attributes,

                'user_id' => Auth::id(),
            ]);
        });
    }
}
