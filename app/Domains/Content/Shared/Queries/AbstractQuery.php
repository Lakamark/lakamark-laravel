<?php

namespace App\Domains\Content\Shared\Queries;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

/**
 * Base query object.
 */
abstract readonly class AbstractQuery
{
    /**
     * Create a new query instance.
     */
    public function __construct(
        protected Request $request,
    ) {}

    /**
     * Build the query.
     */
    abstract public function build(): Builder;

    /**
     * Paginate query results.
     */
    public function paginate(
        int $perPage = 15,
        array $columns = ['*']
    ): LengthAwarePaginator {
        return $this->build()
            ->paginate(
                perPage: $perPage,
                columns: $columns,
            )
            ->withQueryString();
    }

    /**
     * Apply callback when request input exists.
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
