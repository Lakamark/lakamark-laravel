<?php

namespace App\Http\Controllers\CMS;

use App\Domains\Blog\CMS\PostCmsResource;
use App\Domains\Blog\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PostCmsController extends Controller
{
    public function index(PostCmsResource $resource): Response
    {
        return Inertia::render($resource->component('Index'), [
            'resource' => [
                'label' => $resource->label(),
                'routePrefix' => $resource->routePrefix(),
            ],

            'collection' => Post::query()
                ->latest()
                ->paginate(
                    perPage: 10,
                    columns: [
                        'id',
                        'title',
                        'slug',
                        'status',
                        'published_at',
                    ]
                )
            ->withQueryString()
        ]);
    }

    public function edit(PostCmsResource $resource, Post $post): Response
    {
        return Inertia::render($resource->component('Edit'), [
            'post' => $post,
        ]);
    }

    public function create(PostCmsResource $resource): Response
    {
        return Inertia::render($resource->component('Create'));
    }

    public function store(): RedirectResponse
    {
        // TODO validation and persist in the database
        return redirect()->route('dashboard.posts.index');
    }

    public function update(Post $post): RedirectResponse
    {
        // TODO validation + update
        return redirect()->route('dashboard.posts.index');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $post->delete();

        return redirect()->route('dashboard.posts.index');
    }
}
