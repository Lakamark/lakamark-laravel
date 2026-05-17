<?php

namespace App\Domains\Blog\CMS;

use App\Domains\Blog\Models\Post;
use App\Http\Controllers\CMS\AbstractCmsController;
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
}
