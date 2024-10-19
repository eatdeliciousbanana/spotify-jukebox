<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpotifyLoginController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/auth/spotify', [SpotifyLoginController::class, 'redirectToSpotify'])
    ->name('login.spotify');

Route::get('/auth/spotify/callback', [SpotifyLoginController::class, 'handleSpotifyCallback'])
    ->name('login.spotify.callback');

Route::get('/artist/{id}', [ArtistController::class, 'show'])->name('artist.show');

Route::get('/album/{id}', [AlbumController::class, 'show'])->name('album.show');

require __DIR__.'/auth.php';
