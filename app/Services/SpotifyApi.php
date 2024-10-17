<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use SpotifyWebAPI\SpotifyWebAPI;

class SpotifyApi
{
    /**
     * The HTTP request instance.
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    /**
     * The spotify api instance.
     *
     * @var \SpotifyWebAPI\SpotifyWebAPI
     */
    protected $api;

    /**
     * Create a new SpotifyApi instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;

        $this->setApi();
    }

    /**
     * Set the SpotifyWebAPI object to use.
     *
     * @return void
     */
    public function setApi()
    {
        $api = new SpotifyWebAPI();

        $access_token = Cache::get('spotify_access_token');

        if (empty($access_token)) {
            $session = new SpotifySession($this->request);
            $access_token = $session->refreshTokens();
        }

        $api->setAccessToken($access_token);

        $this->api = $api;
    }
}
