# Spotify Jukebox
A jukebox application using Spotify Web API.

![img1](https://github.com/user-attachments/assets/6ddaac1d-2cc0-4238-bf05-e1ed18427eb4)

## Built With

* [![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)
* [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
* [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
* [Inertia.js](https://inertiajs.com/)
* [TailAdmin](https://tailadmin.com/)
* [spotify-web-api-php](https://github.com/jwilsson/spotify-web-api-php)

## Requirements

* PHP 8.2 or later.
* One Spotify Premium Account

## Installation

Clone the repo locally:

```sh
git clone https://github.com/eatdeliciousbanana/spotify-jukebox.git
cd spotify-jukebox
```

Setup configuration:

```sh
cp .env.example .env
```

Enter the following items in `.env`

* database config
* Google OAuth credentials (Create a new project on [Google Console](https://console.cloud.google.com/projectcreate))
* Spotify app credentials (Create a new app at [Spotify’s developer site](https://developer.spotify.com/documentation/web-api))
* Jukebox administrator's e-mail address (Must be a Gmail address)

```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password

GOOGLE_KEY=""
GOOGLE_SECRET=""
GOOGLE_REDIRECT_URI="http://localhost/auth/google/callback"

SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""
SPOTIFY_REDIRECT_URI="http://localhost/auth/spotify/callback"

JUKEBOX_ADMIN_MAIL=""
```

Install PHP dependencies:

```sh
composer install
```

Start container:

```sh
./vendor/bin/sail up -d
```

Install PHP dependencies in container and restart:

```sh
./vendor/bin/sail exec laravel.test composer install
./vendor/bin/sail restart
```

Generate application key:

```sh
./vendor/bin/sail artisan key:generate
```

Run database migrations:

```sh
./vendor/bin/sail artisan migrate
```

Install NPM dependencies:

```sh
./vendor/bin/sail exec laravel.test npm install
```

Build assets:

```sh
./vendor/bin/sail npm run dev
```

You're ready to go! Visit http://localhost in your browser, and login as administrator.

## Usage

### Administrator

After login, go to Spotify Login page and login to spotify (Premium account required).

![img2](https://github.com/user-attachments/assets/df6fe8aa-cec4-4181-a7d6-b41284831eee)

Go to Player page, turn on the device and start playback.

![img3](https://github.com/user-attachments/assets/1bf85316-d634-4dda-a54e-0ed5147a4835)

### General Users

Go to Search page and find track you want to request.

![img4](https://github.com/user-attachments/assets/cc5e66f1-8ab4-47f1-9d30-ea3d3a70a1f1)

Select a track and make a request.

![img5](https://github.com/user-attachments/assets/4e1af9da-68c2-4d53-a7cf-0893e9e75c22)

## License

Distributed under the MIT License. See `LICENSE.md` for more information.
