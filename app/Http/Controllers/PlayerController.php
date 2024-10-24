<?php

namespace App\Http\Controllers;

use App\Services\SpotifyApi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PlayerController extends Controller
{
    public function __construct(
        private SpotifyApi $api,
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $data = $this->api->getMyDevices();

        return Inertia::render('Player/Index', [
            'devices' => $data->devices,
        ]);
    }

    public function play()
    {
        try {
            // return value is unreliable, so ignore it
            $this->api->play();
            $result = true;
        } catch (\Exception $e) {
            $result = false;
        }

        if ($result) {
            return back()->with('success', 'Playback started');
        } else {
            return back()->with('error', 'Failed to start playback. Please try again later.');
        }
    }

    public function pause()
    {
        try {
            // return value is unreliable, so ignore it
            $this->api->pause();
            $result = true;
        } catch (\Exception $e) {
            $result = false;
        }

        if ($result) {
            return back()->with('success', 'Playback paused');
        } else {
            return back()->with('error', 'Failed to pause playback. Please try again later.');
        }
    }

    public function previous()
    {
        try {
            // return value is unreliable, so ignore it
            $this->api->previous();
            $result = true;
        } catch (\Exception $e) {
            $result = false;
        }

        if ($result) {
            return back()->with('success', 'Track skipped');
        } else {
            return back()->with('error', 'Failed to skip track. Please try again later.');
        }
    }

    public function next()
    {
        try {
            // return value is unreliable, so ignore it
            $this->api->next();
            $result = true;
        } catch (\Exception $e) {
            $result = false;
        }

        if ($result) {
            return back()->with('success', 'Track skipped');
        } else {
            return back()->with('error', 'Failed to skip track. Please try again later.');
        }
    }

    public function changeVolume(Request $request)
    {
        $volume_percent = $request->input('volume_percent');

        try {
            // return value is unreliable, so ignore it
            $this->api->changeVolume([
                'volume_percent' => intval($volume_percent),
            ]);
            $result = true;
        } catch (\Exception $e) {
            $result = false;
        }

        if ($result) {
            return back()->with('success', 'Playback volume changed');
        } else {
            return back()->with('error', 'Failed to change playback volume. Please try again later.');
        }
    }
}
