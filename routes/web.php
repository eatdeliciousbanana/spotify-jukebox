<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QueueController;
use App\Http\Controllers\SearchController;
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

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('spotify-login', [SpotifyLoginController::class, 'index'])->name('spotifyLogin.index');

Route::get('/auth/spotify', [SpotifyLoginController::class, 'redirectToSpotify'])
    ->name('login.spotify');

Route::get('/auth/spotify/callback', [SpotifyLoginController::class, 'handleSpotifyCallback'])
    ->name('login.spotify.callback');

Route::get('/search', [SearchController::class, 'index'])->name('search.index');

Route::get('/artist/{id}', [ArtistController::class, 'show'])->name('artist.show');

Route::get('/album/{id}', [AlbumController::class, 'show'])->name('album.show');

Route::post('/queue', [QueueController::class, 'store'])->name('queue.store');

Route::get('/player', [PlayerController::class, 'index'])->name('player.index');
Route::post('/player/play', [PlayerController::class, 'play'])->name('player.play');
Route::post('/player/pause', [PlayerController::class, 'pause'])->name('player.pause');
Route::post('/player/previous', [PlayerController::class, 'previous'])->name('player.previous');
Route::post('/player/next', [PlayerController::class, 'next'])->name('player.next');
Route::post('/player/change-volume', [PlayerController::class, 'changeVolume'])->name('player.changeVolume');

require __DIR__.'/auth.php';
