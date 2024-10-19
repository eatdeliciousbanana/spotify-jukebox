<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistAlbumsResource;
use App\Http\Resources\ArtistResource;
use App\Services\SpotifyApi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ArtistController extends Controller
{
    public function __construct(
        private SpotifyApi $api,
    ) {}

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $artist = $this->api->getArtist($id);
        $albums = $this->api->getArtistAlbums($id);

        return Inertia::render('Artist/Show', [
            'artist' => new ArtistResource($artist),
            'albums' => new ArtistAlbumsResource($albums),
        ]);
    }
}
