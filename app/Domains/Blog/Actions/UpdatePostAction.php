<?php

namespace App\Domains\Blog\Actions;

use App\Domains\Blog\Models\Post;
use App\Domains\Shared\Actions\AbstractAction;

readonly class UpdatePostAction extends AbstractAction
{
    /**
     * Update the given post.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function handle(
        Post $post,
        array $attributes,
    ): Post {
        return $this->transaction(
            function () use ($post, $attributes): Post {
                $post->update($attributes);

                return $post->refresh();
            }
        );
    }
}
