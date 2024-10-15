<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\GoogleLoginController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::get('/auth/google', [GoogleLoginController::class, 'redirectToGoogle'])
        ->name('login.google');

    Route::get('/auth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback'])
        ->name('login.google.callback');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
