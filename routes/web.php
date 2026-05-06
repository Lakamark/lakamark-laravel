<?php

use App\Http\Controllers\CMS\PostCmsController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Frontend
require __DIR__.'/frontend.php';

/*
Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');
*/

// App (Inertia)
Route::middleware([
    'auth',
    'verified',
    'role:admin,moderator,editor',
])
    ->prefix('dashboard')
    ->name('dashboard.')
    ->group(function (): void {

        Route::inertia('/', 'dashboard')
            ->name('index');

        Route::resource('/posts', PostCmsController::class)
            ->names('posts');
    });

require __DIR__.'/settings.php';
