import { Artist } from "@/types";

interface ArtistCardProps {
    artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
    return (
        <div className="rounded-sm bg-white py-6 px-7.5 shadow-default dark:bg-boxdark">
            <div className="sm:flex items-center">
                <div className="w-70 max-w-full">
                    <img src={artist.image} alt="Artist" />
                </div>
                <div className="ml-3 mt-3 sm:ml-8 sm:mt-0">
                    <h4 className="text-title-xl font-bold text-black dark:text-white">
                        {artist.name}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ArtistCard;
