<?php

namespace App\Http\Controllers\CMS;

use App\Data\CMS\Posts\PostFormData;
use App\Domains\Blog\Actions\StorePostAction;
use App\Domains\Blog\Actions\UpdatePostAction;
use App\Domains\Blog\CMS\PostCmsResource;
use App\Domains\Blog\Models\Post;
use App\Domains\Blog\Requests\StorePostRequest;
use App\Domains\Blog\Requests\UpdatePostRequest;
use App\Domains\Content\Queries\PostIndexQuery;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class PostCmsController extends AbstractCmsController
{
    public function index(
        PostCmsResource $resource,
        PostIndexQuery $posts,
    ): Response {
        return $this->renderIndex(
            resource: $resource,
            query: $posts,
            columns: [
                'id',
                'title',
                'slug',
                'status',
                'published_at',
                'moderation_status',
                'moderated_by',
                'moderated_at',
            ],
        );
    }

    public function create(
        PostCmsResource $resource,
    ): Response {
        return $this->renderCreate($resource);
    }

    public function edit(
        PostCmsResource $resource,
        Post $post,
    ): Response {
        return $this->renderEdit($resource, [
            'post' => PostFormData::from($post),
        ]);
    }

    public function store(
        StorePostRequest $request,
        StorePostAction $action,
        PostCmsResource $resource,
    ): RedirectResponse {
        $action->handle($request->validated());

        return $this->redirectToIndex($resource);
    }

    public function update(
        UpdatePostRequest $request,
        UpdatePostAction $action,
        PostCmsResource $resource,
        Post $post,
    ): RedirectResponse {
        $action->handle(
            $post,
            $request->validated(),
        );

        return $this->redirectToIndex($resource);
    }

    public function destroy(
        Post $post,
        PostCmsResource $resource,
    ): RedirectResponse {
        $post->delete();

        return $this->redirectToIndex($resource);
    }
}
