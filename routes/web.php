<?php

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
    'role:admin,moderator,editor']
)->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
