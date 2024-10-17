<?php

namespace App\Http\Controllers;

use App\Services\SpotifySession;
use Illuminate\Http\Request;

class SpotifyLoginController extends Controller
{
    public function __construct(
        private SpotifySession $session,
    ) {}

    public function redirectToSpotify()
    {
        return $this->session->redirect();
    }

    public function handleSpotifyCallback()
    {
        $this->session->handleCallback();

        return redirect(route('dashboard'));
    }
}
