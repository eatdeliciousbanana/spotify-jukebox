export interface User {
    name: string;
    avatar: string;
}

export interface Album {
    album_type: string;
    total_tracks: number;
    id: string;
    image: string;
    name: string;
    release_date: string;
    artists: {
        id: string;
        name: string;
    }[];
    tracks: Track[];
}

export interface Track {
    artists: {
        id: string;
        name: string;
    }[];
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
