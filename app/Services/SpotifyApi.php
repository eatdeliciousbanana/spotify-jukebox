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
     * Get an album.
     *
     * @param string $album_id ID or URI of the album.
     *
     * @return array|object The requested album.
     */
    public function getAlbum(string $album_id): array|object
    {
        return $this->api->getAlbum($album_id);
    }

    /**
     * Get an artist.
     *
     * @param string $artist_id ID or URI of the artist.
     *
     * @return array|object The requested artist.
     */
    public function getArtist(string $artist_id): array|object
    {
        return $this->api->getArtist($artist_id);
    }

    /**
     * Get an artist's albums.
     *
     * @param string $artist_id ID or URI of the artist.
     *
     * @return array|object The artist's albums.
     */
    public function getArtistAlbums(string $artist_id): array|object
    {
        return $this->api->getArtistAlbums($artist_id);
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
