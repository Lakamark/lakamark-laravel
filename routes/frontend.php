<?php

use App\Http\Controllers\Frontend\AccountController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware([
    'auth',
    'verified',
])->name('account.')
    ->group(function () {
        Route::get('/account', [AccountController::class, 'index'])
            ->name('index');
    });
