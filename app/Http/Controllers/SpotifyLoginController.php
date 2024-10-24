<?php

namespace App\Http\Controllers;

use App\Services\SpotifySession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class SpotifyLoginController extends Controller
{
    public function __construct(
        private SpotifySession $session,
    ) {}

    public function index(): Response
    {
        $is_login = Cache::has('spotify_refresh_token');

        return Inertia::render('SpotifyLogin/Index', [
            'is_login' => $is_login,
        ]);
    }

    public function redirectToSpotify()
    {
        return $this->session->redirect();
    }

    public function handleSpotifyCallback()
    {
        $this->session->handleCallback();

        return redirect()->route('dashboard');
    }
}
