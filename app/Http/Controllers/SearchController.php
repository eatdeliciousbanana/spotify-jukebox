<?php

namespace App\Http\Controllers;

use App\Http\Resources\SearchResultResource;
use App\Services\SpotifyApi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SearchController extends Controller
{
    public function __construct(
        private SpotifyApi $api,
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $q = $request->query('q', '');
        $type = $request->query('type', 'artist');

        if (empty($q) || !in_array($type, ['artist', 'album', 'track'], true)) {
            $results = [
                'artists' => [],
                'albums' => [],
                'tracks' => [],
            ];
        } else {
            $data = $this->api->search($q, $type);
            $results = new SearchResultResource($data);
        }

        return Inertia::render('Search/Index', [
            'filters' => ['q' => $q, 'type' => $type],
            'results' => $results,
        ]);
    }
}
