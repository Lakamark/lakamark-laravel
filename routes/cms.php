<?php

use App\Http\Controllers\CMS\PostCmsController;
use App\Http\Controllers\CMS\PostModerationController;
use Illuminate\Support\Facades\Route;

Route::resource('/posts', PostCmsController::class)
    ->except(['show'])
    ->names('posts');

Route::prefix('posts/{post}')
    ->name('posts.')
    ->group(function (): void {
        Route::post('/approve', [PostModerationController::class, 'approve'])
            ->name('approve');

        Route::post('/reject', [PostModerationController::class, 'reject'])
            ->name('reject');

        Route::post('/reset-moderation', [PostModerationController::class, 'reset'])
            ->name('reset-moderation');
    });
