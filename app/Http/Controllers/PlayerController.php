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
        //
    }

    public function pause()
    {
        //
    }

    public function previous()
    {
        //
    }

    public function next()
    {
        //
    }

    public function changeVolume(Request $request)
    {
        //
    }
}
