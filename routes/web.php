<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\QueueController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SpotifyLoginController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/login');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/artist/{id}', [ArtistController::class, 'show'])->name('artist.show');
    Route::get('/album/{id}', [AlbumController::class, 'show'])->name('album.show');
    Route::get('/search', [SearchController::class, 'index'])->name('search.index');
    Route::post('/queue', [QueueController::class, 'store'])->name('queue.store');

    Route::middleware('can:admin')->group(function () {
        Route::get('/player', [PlayerController::class, 'index'])->name('player.index');
        Route::post('/player/play', [PlayerController::class, 'play'])->name('player.play');
        Route::post('/player/pause', [PlayerController::class, 'pause'])->name('player.pause');
        Route::post('/player/previous', [PlayerController::class, 'previous'])->name('player.previous');
        Route::post('/player/next', [PlayerController::class, 'next'])->name('player.next');
        Route::post('/player/change-volume', [PlayerController::class, 'changeVolume'])->name('player.changeVolume');

        Route::get('/spotify-login', [SpotifyLoginController::class, 'index'])->name('spotifyLogin.index');
        Route::get('/auth/spotify', [SpotifyLoginController::class, 'redirectToSpotify'])->name('login.spotify');
        Route::get('/auth/spotify/callback', [SpotifyLoginController::class, 'handleSpotifyCallback'])->name('login.spotify.callback');
    });
});

require __DIR__.'/auth.php';
