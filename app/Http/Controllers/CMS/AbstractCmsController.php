<?php

namespace App\Http\Controllers\CMS;

use App\Domains\CMS\Support\AbstractCmsResource;
use App\Domains\Content\Shared\Queries\AbstractQuery;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Base CMS controller.
 *
 * Responsibilities:
 * - Centralize CMS Inertia rendering
 * - Provide shared CMS page helpers
 * - Standardize CMS controller structure
 * - Keep CMS controllers lightweight
 *
 * This controller is intended to be extended
 * by domain-specific CMS controllers.
 */
abstract class AbstractCmsController extends Controller
{
    /**
     * Render a CMS index page.
     *
     * @param  list<string>  $columns
     * @param  array<string, mixed>  $props
     */
    protected function renderIndex(
        AbstractCmsResource $resource,
        AbstractQuery $query,
        array $columns = ['*'],
        int $perPage = 10,
        array $props = [],
    ): Response {
        return Inertia::render($resource->component('Index'), [
            'resource' => $this->resourcePayload($resource),

            'collection' => $query->paginate(
                perPage: $perPage,
                columns: $columns,
            ),

            ...$props,
        ]);
    }

    /**
     * Render a CMS create page.
     *
     * @param  array<string, mixed>  $props
     */
    protected function renderCreate(
        AbstractCmsResource $resource,
        array $props = [],
    ): Response {
        return Inertia::render($resource->component('Create'), [
            'resource' => $this->resourcePayload($resource),
            ...$props,
        ]);
    }

    /**
     * Render a CMS edit page.
     *
     * @param  array<string, mixed>  $props
     */
    protected function renderEdit(
        AbstractCmsResource $resource,
        array $props = [],
    ): Response {
        return Inertia::render($resource->component('Edit'), [
            'resource' => $this->resourcePayload($resource),
            ...$props,
        ]);
    }

    /**
     * Build the shared CMS resource payload.
     *
     * @return array<string, mixed>
     */
    protected function resourcePayload(
        AbstractCmsResource $resource,
    ): array {
        return [
            'label' => $resource->label(),
            'routePrefix' => $resource->routePrefix(),
        ];
    }

    /**
     * Redirect to the CMS index page.
     */
    protected function redirectToIndex(
        AbstractCmsResource $resource,
    ): RedirectResponse {
        return redirect()->route(
            $resource->routePrefix().'.index',
        );
    }
}
