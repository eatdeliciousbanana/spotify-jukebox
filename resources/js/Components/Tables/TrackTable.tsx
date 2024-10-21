import { Track, ModalOptions } from "@/types";
import { msToSec } from "@/utils";
import { Link } from "@inertiajs/react";

interface TrackTableProps {
    tracks: Track[];
    showImage: boolean;
    setModalOptions: React.Dispatch<React.SetStateAction<ModalOptions>>;
}

const TrackTable = ({
    tracks,
    showImage,
    setModalOptions,
}: TrackTableProps) => {
    return (
        <div className="rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="w-13 py-3 px-4 font-medium text-black dark:text-white">
                                #
                            </th>
                            <th className="py-3 px-4 font-medium text-black dark:text-white">
                                Title
                            </th>
                            <th className="py-3 px-4 pr-5 text-right font-medium text-black dark:text-white">
                                Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((track, key) => (
                            <tr
                                key={key}
                                onClick={() =>
                                    setModalOptions({
                                        show: true,
                                        track: track,
                                    })
                                }
                                className="hover:bg-whiten dark:hover:bg-boxdark-2"
                            >
                                <td
                                    className={`border-b border-[#eee] w-13 dark:border-strokedark ${
                                        !showImage && "py-4 px-4"
                                    }`}
                                >
                                    {showImage ? (
                                        <img
                                            src={
                                                track.album && track.album.image
                                            }
                                            alt="Album"
                                        />
                                    ) : (
                                        <p className="text-black dark:text-white">
                                            {track.track_number}
                                        </p>
                                    )}
                                </td>
                                <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {track.name}
                                    </h5>
                                    <p className="text-sm">
                                        {track.artists.map((artist, key) => (
                                            <span key={key}>
                                                {key > 0 ? ", " : ""}
                                                <Link
                                                    className="hover:underline"
                                                    href={route(
                                                        "artist.show",
                                                        artist.id
                                                    )}
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                >
                                                    {artist.name}
                                                </Link>
                                            </span>
                                        ))}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-4 px-4 pr-5 text-right dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {msToSec(track.duration_ms)}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrackTable;
