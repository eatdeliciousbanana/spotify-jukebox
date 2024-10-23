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
        $response = Cache::get('spotify_playback');

        if (empty($response)) {
            $response = $this->api->getMyCurrentPlaybackInfo();

            if (empty($response)) {

                // if nothing is played back, cache empty response for 5 minutes
                Cache::put('spotify_playback', 'empty_response', 300);

            } else {

                $progress_ms = $response->progress_ms;
                $duration_ms = $response->item->duration_ms;
                $expires_in = intval(($duration_ms - $progress_ms) / 1000);

                // cache response until end of currently playing track
                Cache::put('spotify_playback', $response, $expires_in);
            }

        } else if ($response === 'empty_response') {
            $response = null;
        }

        return $response;
    }

    /**
     * Get the current user’s queue.
     *
     * @return array|object The currently playing song and queue.
     */
    public function getMyQueue()
    {
        $response = Cache::get('spotify_queue');

        if (empty($response)) {
            $response = $this->api->getMyQueue();

            // cache response for 30 minutes to reduce api calls
            Cache::put('spotify_queue', $response, 1800);
        }

        return $response;
    }

    /**
      * Get the current user’s recently played tracks.
      *
      * @return array|object The most recently played tracks.
      */
    public function getMyRecentTracks(): array|object
    {
        $response = Cache::get('spotify_recent');

        if (empty($response)) {
            $response = $this->api->getMyRecentTracks();

            // cache response for 30 minutes to reduce api calls
            Cache::put('spotify_recent', $response, 1800);
        }

        return $response;
    }

    /**
     * Add an item to the queue.
     *
     * @param string $track_uri Required. Track ID, track URI or episode URI to queue.
     *
     * @return bool Whether the track was successfully queued.
     */
    public function queue(string $track_uri): bool
    {
        // clear cache so that the latest data can be retrieved
        Cache::forget('spotify_queue');

        return $this->api->queue($track_uri);
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
