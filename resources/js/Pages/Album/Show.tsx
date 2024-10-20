import { Album } from "@/types";
import AlbumCard from "@/Components/Cards/AlbumCard";
import TrackTable from "@/Components/Tables/TrackTable";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface ShowProps {
    album: Album;
}

const Show = ({ album }: ShowProps) => {
    return (
        <>
            <AlbumCard album={album} />
            <div className="flex flex-col gap-10">
                <TrackTable tracks={album.tracks} showImage={false} />
            </div>
        </>
    );
};

Show.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Album" children={page} />
);

export default Show;
