<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlaybackResource;
use App\Http\Resources\RecentTracksResource;
use App\Services\SpotifyApi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __construct(
        private SpotifyApi $api,
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $playback = $this->api->getMyCurrentPlaybackInfo();
        // $queue = $this->api->getMyQueue();
        $recent = $this->api->getMyRecentTracks();

        return Inertia::render('Dashboard', [
            'playback' => new PlaybackResource($playback),
            'recent' => new RecentTracksResource($recent),
        ]);
    }
}
