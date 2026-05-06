<?php

namespace App\Domains\CMS\Support;

use App\Domains\CMS\Contracts\CmsResource;

/**
 * Provides shared behavior for CMS resources.
 *
 * This abstract class centralizes reusable CMS logic
 * shared across administration resources.
 */
abstract class AbstractCmsResource implements CmsResource
{
    /**
     * Returns the route name for a specific CMS action.
     *
     * Example:
     * dashboard.posts.index
     */
    public function route(string $action): string
    {
        return "{$this->routePrefix()}.$action";
    }

    /**
     * Returns the full Inertia component path.
     *
     * Example:
     * Dashboard/Posts/Index
     */
    public function component(string $page): string
    {
        return "{$this->componentPath()}/$page";
    }
}
