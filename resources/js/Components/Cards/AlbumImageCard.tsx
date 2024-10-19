import { Album } from "@/types";
import { Link } from "@inertiajs/react";

interface AlbumImageCardProps {
    album: Album;
}

const AlbumImageCard = ({ album }: AlbumImageCardProps) => {
    const capitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

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
                    {`${album.release_date.split("-")[0]} • ${capitalize(
                        album.album_type
                    )}`}
                </span>
            </div>
        </Link>
    );
};

export default AlbumImageCard;
