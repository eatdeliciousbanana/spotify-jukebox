export interface User {
    name: string;
    avatar: string;
    role: number;
}

export interface Artist {
    id: string;
    image: string;
    name: string;
}

export interface Album {
    album_type: string;
    total_tracks: number;
    id: string;
    image: string;
    name: string;
    release_date: string;
    artists: Artist[];
    tracks: Track[];
}

export interface Track {
    album?: Album;
    artists: Artist[];
    duration_ms: number;
    name: string;
    track_number: number;
    uri: string;
}

export interface ModalOptions {
    show: boolean;
    track: Track | null;
}

export interface Playback {
    is_playing: boolean;
    track: Track | null;
}

export interface Device {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
    supports_volume: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    flash: {
        success: string | null;
        error: string | null;
    };
};
