<?php

namespace App\Http\Controllers;

use App\Services\SpotifyApi;
use Illuminate\Http\Request;

class QueueController extends Controller
{
    public function __construct(
        private SpotifyApi $api,
    ) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $uri = $request->input('uri');

        try {
            // this method always returns false, so ignore the return value
            $this->api->queue($uri);
            $result = true;
        } catch (\Exception $e) {
            $result = false;
        }

        if ($result) {
            return redirect()->route('dashboard')->with('success', 'Track added to queue');
        } else {
            return back()->with('error', 'Failed to add track. Please try again later.');
        }
    }
}
