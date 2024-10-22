import { Playback } from "@/types";
import { Link } from "@inertiajs/react";

interface PlaybackCardProps {
    playback: Playback;
}

const PlaybackCard = ({ playback }: PlaybackCardProps) => {
    return (
        <div className="rounded-sm bg-white py-6 px-7.5 shadow-default dark:bg-boxdark">
            <div className="sm:flex items-center">
                <div className="w-70 max-w-full">
                    {playback.is_playing ? (
                        <img src={playback.track?.album?.image} alt="Album" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            fill="#5f6368"
                        >
                            <path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                    )}
                </div>
                <div className="ml-3 mt-3 sm:ml-8 sm:mt-0">
                    {playback.is_playing && (
                        <span className="text-sm font-medium">
                            Currently Playing...
                        </span>
                    )}
                    <h4 className="text-title-xl font-bold text-black dark:text-white">
                        {playback.is_playing
                            ? playback.track?.name
                            : "Nothing is currently playing..."}
                    </h4>
                    {playback.is_playing && (
                        <span className="text-base font-medium">
                            {playback.track?.artists.map((artist, key) => (
                                <span key={key}>
                                    {key > 0 ? ", " : ""}
                                    <Link
                                        className="hover:underline"
                                        href={route("artist.show", artist.id)}
                                    >
                                        {artist.name}
                                    </Link>
                                </span>
                            ))}
                            {" • "}
                            <Link
                                className="hover:underline"
                                href={route(
                                    "album.show",
                                    playback.track?.album?.id
                                )}
                            >
                                {playback.track?.album?.name}
                            </Link>
                            {` • ${
                                playback.track?.album?.release_date.split(
                                    "-"
                                )[0]
                            }`}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlaybackCard;
