<?php

namespace Tests\Fixtures\CMS;

use App\Domains\Blog\Models\Post;
use App\Domains\CMS\Support\AbstractCmsResource;

class FakeCmsResource extends AbstractCmsResource
{
    public function label(): string
    {
        return 'Post';
    }

    public function model(): string
    {
        return Post::class;
    }

    public function routePrefix(): string
    {
        return 'dashboard.posts';
    }

    public function componentPath(): string
    {
        return 'Dashboard/Posts';
    }
}
