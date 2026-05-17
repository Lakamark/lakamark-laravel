<?php

namespace App\Domains\Content\Shared\Queries;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Base query object.
 *
 * Responsibilities:
 * - Centralize query object behavior
 * - Provide pagination helpers
 * - Expose reusable filtering utilities
 * - Keep controllers lightweight
 *
 * Query objects are intended to encapsulate
 * complex filtering and visibility logic outside
 * of controllers.
 */
abstract readonly class AbstractQuery
{
    /**
     * Create a new query instance.
     *
     * @param  Request  $request  Current HTTP request instance.
     */
    public function __construct(
        protected Request $request,
    ) {}

    /**
     * Build the base Eloquent query.
     */
    abstract public function build(): Builder;

    /**
     * Paginate the query results.
     *
     * @param  int  $perPage  Number of items per page.
     */
    public function paginate(
        int $perPage = 15,
    ): LengthAwarePaginator {
        return $this->build()
            ->paginate($perPage)
            ->withQueryString();
    }

    /**
     * Apply a callback when a request value exists.
     *
     * @param  Builder  $query  Current query builder instance.
     * @param  string  $key  Request input key.
     * @param  callable  $callback  Callback executed when value exists.
     */
    protected function whenFilled(
        Builder $query,
        string $key,
        callable $callback,
    ): Builder {
        $value = $this->request
            ->string($key)
            ->trim()
            ->toString();

        if ($value === '') {
            return $query;
        }

        $callback($query, $value);

        return $query;
    }
}
