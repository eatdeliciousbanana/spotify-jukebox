import { Album } from "@/types";
import { capitalize } from "@/utils";
import { Link } from "@inertiajs/react";

interface AlbumCardProps {
    album: Album;
}

const AlbumCard = ({ album }: AlbumCardProps) => {
    return (
        <div className="rounded-sm bg-white py-6 px-7.5 shadow-default dark:bg-boxdark">
            <div className="sm:flex items-center">
                <div className="w-70 max-w-full">
                    <img src={album.image} alt="Album" />
                </div>
                <div className="ml-3 mt-3 sm:ml-8 sm:mt-0">
                    <span className="text-sm font-medium">
                        {capitalize(album.album_type)}
                    </span>
                    <h4 className="text-title-xl font-bold text-black dark:text-white">
                        {album.name}
                    </h4>
                    <span className="text-base font-medium">
                        {album.artists.map((artist, key) => (
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
                        {` • ${album.release_date.split("-")[0]} • ${
                            album.total_tracks
                        } tracks`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;
