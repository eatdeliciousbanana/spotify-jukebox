import { Artist } from "@/types";

interface ArtistCardProps {
    artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
    return (
        <div className="rounded-sm bg-white py-6 px-7.5 shadow-default dark:bg-boxdark">
            <div className="sm:flex items-center">
                <div className="w-70 max-w-full">
                    {artist.image ? (
                        <img src={artist.image} alt="Artist" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            fill="#5f6368"
                        >
                            <path d="M740-560h140v80h-80v220q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-42 29-71t71-29q8 0 18 1.5t22 6.5v-208ZM120-160v-112q0-35 17.5-63t46.5-43q62-31 126-46.5T440-440q42 0 83.5 6.5T607-414q-20 12-36 29t-28 37q-26-6-51.5-9t-51.5-3q-57 0-112 14t-108 40q-9 5-14.5 14t-5.5 20v32h321q2 20 9.5 40t20.5 40H120Zm320-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0-80Zm0 400Z" />
                        </svg>
                    )}
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