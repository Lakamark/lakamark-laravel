<?php

use App\Domains\Blog\CMS\PostCmsResource;
use App\Domains\Blog\Models\Post;

it('describes the post cms resource', function (): void {
    $resource = new PostCmsResource;

    expect($resource->label())->toBe('Posts')
        ->and($resource->model())->toBe(Post::class)
        ->and($resource->routePrefix())->toBe('dashboard.posts')
        ->and($resource->componentPath())->toBe('dashboard/posts');
});

it('builds cms route names', function (): void {
    $resource = new PostCmsResource;

    expect($resource->route('index'))
        ->toBe('dashboard.posts.index')
        ->and($resource->route('create'))
        ->toBe('dashboard.posts.create');
});

it('builds inertia component paths', function (): void {
    $resource = new PostCmsResource;

    expect($resource->component('Index'))
        ->toBe('dashboard/posts/index')
        ->and($resource->component('create'))
        ->toBe('dashboard/posts/create');
});
