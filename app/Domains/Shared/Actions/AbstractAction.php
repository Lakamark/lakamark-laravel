<?php

namespace App\Domains\Shared\Actions;

use Illuminate\Support\Facades\DB;

abstract readonly class AbstractAction
{
    /**
     * Execute the callback inside a database transaction.
     */
    protected function transaction(
        callable $callback,
    ): mixed {
        return DB::transaction($callback);
    }
}