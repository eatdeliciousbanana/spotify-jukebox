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
     * Search for an item.
     *
     * @param string $query The term to search for.
     * @param string|array $type The type of item to search for.
     *
     * @return array|object The search results.
     */
    public function search(string $query, string|array $type): array|object
    {
        return $this->api->search($query, $type);
    }

    /**
     * Get the current user’s current playback information.
     *
     * @return array|object|null The user's playback information or null if nothing's currently playing.
     */
    public function getMyCurrentPlaybackInfo(): array|object|null
    {
        return $this->api->getMyCurrentPlaybackInfo();
    }

    /**
     * Get the current user’s queue.
     *
     * @return array|object The currently playing song and queue.
     */
    public function getMyQueue()
    {
        return $this->api->getMyQueue();
    }

    /**
      * Get the current user’s recently played tracks.
      *
      * @return array|object The most recently played tracks.
      */
    public function getMyRecentTracks(): array|object
    {
        return $this->api->getMyRecentTracks();
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
