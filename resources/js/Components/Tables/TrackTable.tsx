import { Track } from "@/types";

interface TrackTableProps {
    tracks: Track[];
}

const TrackTable = ({ tracks }: TrackTableProps) => {
    const msToSec = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    };

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
                            <tr key={key}>
                                <td className="border-b border-[#eee] w-13 py-4 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {track.track_number}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {track.name}
                                    </h5>
                                    <p className="text-sm">
                                        {track.artists.map((artist, key) => (
                                            <span key={key}>
                                                {(key > 0 ? ", " : "") +
                                                    artist.name}
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
