<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Services\SpotifyApi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AlbumController extends Controller
{
    public function __construct(
        private SpotifyApi $api,
    ) {}

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $album = $this->api->getAlbum($id);

        return Inertia::render('Album/Show', [
            'album' => new AlbumResource($album),
        ]);
    }
}
