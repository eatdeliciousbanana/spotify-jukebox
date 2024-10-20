import { Album, Artist, Track } from "@/types";
import SearchForm from "@/Components/Form/SearchForm";
import ArtistImageCard from "@/Components/Cards/ArtistImageCard";
import AlbumImageCard from "@/Components/Cards/AlbumImageCard";
import TrackTable from "@/Components/Tables/TrackTable";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface IndexProps {
    filters: {
        q: string;
        type: string;
    };
    results: {
        artists: Artist[];
        albums: Album[];
        tracks: Track[];
    };
}

const Index = ({ filters, results }: IndexProps) => {
    return (
        <>
            <SearchForm filters={filters} />

            {results.artists.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7.5">
                    {results.artists.map((artist, key) => (
                        <ArtistImageCard key={key} artist={artist} />
                    ))}
                </div>
            )}

            {results.albums.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7.5">
                    {results.albums.map((album, key) => (
                        <AlbumImageCard
                            key={key}
                            album={album}
                            showArtist={true}
                        />
                    ))}
                </div>
            )}

            {results.tracks.length > 0 && (
                <div className="mt-6 flex flex-col gap-10">
                    <TrackTable tracks={results.tracks} showImage={true} />
                </div>
            )}
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Search" children={page} />
);

export default Index;
