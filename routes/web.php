<?php

use Illuminate\Support\Facades\Route;

// Frontend
require __DIR__.'/frontend.php';

// App (Inertia)
Route::middleware([
    'auth',
    'verified',
    'role:admin,moderator,editor',
])
    ->prefix('dashboard')
    ->name('dashboard.')
    ->group(function (): void {
        require __DIR__.'/dashboard.php';
        require __DIR__.'/cms.php';
    });

require __DIR__.'/settings.php';
