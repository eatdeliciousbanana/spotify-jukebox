import { Album } from "@/types";
import { capitalize } from "@/utils";
import { Link } from "@inertiajs/react";

interface AlbumImageCardProps {
    album: Album;
    showArtist: boolean;
}

const AlbumImageCard = ({ album, showArtist }: AlbumImageCardProps) => {
    return (
        <Link
            className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
            href={route("album.show", album.id)}
        >
            <div className="w-full bg-meta-2 dark:bg-meta-4">
                <img src={album.image} alt="Album" />
            </div>
            <div className="mt-4">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                    {album.name}
                </h4>
                <span className="text-base font-medium">
                    {`${album.release_date.split("-")[0]} • `}
                    {showArtist ? (
                        <Link
                            className="hover:underline"
                            href={route("artist.show", album.artists[0].id)}
                            as="button"
                            type="button"
                        >
                            {album.artists[0].name}
                        </Link>
                    ) : (
                        capitalize(album.album_type)
                    )}
                </span>
            </div>
        </Link>
    );
};

export default AlbumImageCard;
