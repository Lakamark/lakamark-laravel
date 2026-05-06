<?php

/**
 * Defines the minimal contract required by a CMS resource.
 *
 * A CMS resource describes how a domain model is exposed
 * inside the administration interface.
 */

namespace App\Domains\CMS\Contracts;

interface CmsResource
{
    /**
     * Returns the display label used in the CMS UI.
     *
     * Example:
     * - Posts
     * - Projects
     * - Users
     */
    public function label(): string;

    /**
     * Returns the fully qualified model class name.
     *
     * Example:
     * - Post::class
     * - Project::class
     */
    public function model(): string;

    /**
     * Returns the route name prefix used by the CMS.
     *
     * Example:
     * - 'dashboard.posts'
     * - 'dashboard.projects'
     */
    public function routePrefix();

    /**
     * Returns the base Inertia component path.
     *
     * Example:
     * - Dashboard/Posts
     * - Dashboard/Projects
     */
    public function componentPath(): string;
}
