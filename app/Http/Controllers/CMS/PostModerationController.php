<?php

namespace App\Http\Controllers\CMS;

use App\Domains\Blog\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PostModerationController extends AbstractCmsController
{
    public function approve(
        Request $request,
        Post $post,
    ): RedirectResponse {
        $post->approve($request->user());

        return back();
    }

    public function reject(
        Request $request,
        Post $post,
    ): RedirectResponse {
        $post->reject(
            moderator: $request->user(),
            note: $request->string('moderation_note')->toString(),
        );

        return back();
    }

    public function reset(
        Post $post,
    ): RedirectResponse {
        $post->resetModeration();

        return back();
    }
}
