<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\Frontend\AccountController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');

Route::middleware([
    'auth',
    'verified',
])->name('account.')
    ->group(function () {
        Route::get('/account', [AccountController::class, 'index'])
            ->name('index');
    });
