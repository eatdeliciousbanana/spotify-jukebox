import { Album, Artist } from "@/types";
import ArtistCard from "@/Components/Cards/ArtistCard";
import AlbumImageCard from "@/Components/Cards/AlbumImageCard";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface ShowProps {
    artist: Artist;
    albums: Album[];
}

const Show = ({ artist, albums }: ShowProps) => {
    return (
        <>
            <ArtistCard artist={artist} />
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7.5">
                {albums.map((album, key) => (
                    <AlbumImageCard
                        key={key}
                        album={album}
                        showArtist={false}
                    />
                ))}
            </div>
        </>
    );
};

Show.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Artist" children={page} />
);

export default Show;
