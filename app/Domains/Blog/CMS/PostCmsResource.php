<?php

namespace App\Domains\Blog\CMS;

use App\Domains\Blog\Models\Post;
use App\Domains\CMS\Support\AbstractCmsResource;

class PostCmsResource extends AbstractCmsResource
{
    public function label(): string
    {
        return 'Posts';
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
