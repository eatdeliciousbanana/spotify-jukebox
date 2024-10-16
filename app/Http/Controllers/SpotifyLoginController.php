<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use SpotifyWebAPI\Session;

class SpotifyLoginController extends Controller
{
    public function redirectToSpotify(Request $request)
    {
        $config = config('services.spotify');

        $session = new Session(
            $config['client_id'],
            $config['client_secret'],
            $config['redirect']
        );

        $state = $session->generateState();

        $request->session()->put('state', $state);

        $options = [
            'scope' => [
                'user-read-playback-state',
                'user-modify-playback-state',
                'user-read-currently-playing',
            ],
            'state' => $state,
        ];

        return redirect($session->getAuthorizeUrl($options));
    }

    public function handleSpotifyCallback(Request $request)
    {
        $config = config('services.spotify');

        $session = new Session(
            $config['client_id'],
            $config['client_secret'],
            $config['redirect']
        );

        $state = $request->session()->pull('state');

        if (empty($state) || $request->input('state') !== $state) {
            abort(401);
        }

        $code = $request->input('code');
        $session->requestAccessToken($code);

        $access_token = $session->getAccessToken();
        $refresh_token = $session->getRefreshToken();
        $expires_in = $session->getTokenExpiration() - time();

        Cache::put('spotify_access_token', $access_token, $expires_in);
        Cache::put('spotify_refresh_token', $refresh_token);

        return redirect(route('dashboard'));
    }
}
