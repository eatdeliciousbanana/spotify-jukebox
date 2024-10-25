<?php

namespace App\Http\Controllers\Auth;

use App\Enums\Role;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Laravel\Socialite\Facades\Socialite;

class GoogleLoginController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();

        $is_admin = ($googleUser->getEmail() === config('jukebox.admin_mail'));

        $user = User::updateOrCreate([
            'google_id' => $googleUser->getId(),
        ], [
            'name' => $googleUser->getName(),
            'avatar' => $googleUser->getAvatar(),
            'role' => $is_admin ? Role::ADMIN : Role::GENERAL,
        ]);

        Auth::login($user);

        if ($is_admin && Cache::missing('spotify_refresh_token')) {
            return redirect()->route('spotifyLogin.index');
        } else {
            return redirect()->route('dashboard');
        }
    }
}
