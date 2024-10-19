export interface User {
    name: string;
    avatar: string;
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
    artists: Artist[];
    duration_ms: number;
    name: string;
    track_number: number;
    uri: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
