<?php

namespace App\Services;

use App\Exceptions\InvalidStateException;
use App\Exceptions\MissingRefreshTokenException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use SpotifyWebAPI\Session;

class SpotifySession
{
    /**
     * The HTTP request instance.
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    /**
     * The SpotifyWebAPI\Session instance.
     *
     * @var \SpotifyWebAPI\Session
     */
    protected $session;

    /**
     * Create a new SpotifySession instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->setSession();

        $this->request = $request;
    }

    /**
     * Redirect the user of the application to the provider's authentication screen.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirect()
    {
        $state = $this->session->generateState();

        $this->request->session()->put('state', $state);

        $options = [
            'scope' => [
                'user-read-playback-state',
                'user-modify-playback-state',
                'user-read-currently-playing',
            ],
            'state' => $state,
        ];

        return new RedirectResponse($this->session->getAuthorizeUrl($options));
    }

    /**
     * Handle the authentication callback.
     *
     * @return void
     */
    public function handleCallback()
    {
        $state = $this->request->session()->pull('state');

        if (empty($state) || $this->request->input('state') !== $state) {
            throw new InvalidStateException;
        }

        $code = $this->request->input('code');
        $this->session->requestAccessToken($code);

        $this->storeTokens();
    }

    /**
     * Refresh the access and refresh token.
     *
     * @return void
     */
    public function refreshTokens()
    {
        $refresh_token = Cache::get('spotify_refresh_token');

        if (empty($refresh_token)) {
            throw new MissingRefreshTokenException;
        }

        $this->session->refreshAccessToken($refresh_token);

        $this->storeTokens();
    }

    /**
     * Store the access and refresh token to cache.
     *
     * @return void
     */
    public function storeTokens()
    {
        $access_token = $this->session->getAccessToken();
        $refresh_token = $this->session->getRefreshToken();
        $expires_in = $this->session->getTokenExpiration() - time();

        Cache::put('spotify_access_token', $access_token, $expires_in);
        Cache::put('spotify_refresh_token', $refresh_token);
    }

    /**
     * Set the Session object to use.
     *
     * @return void
     */
    public function setSession()
    {
        $config = config('services.spotify');

        $session = new Session(
            $config['client_id'],
            $config['client_secret'],
            $config['redirect']
        );

        $this->session = $session;
    }
}
