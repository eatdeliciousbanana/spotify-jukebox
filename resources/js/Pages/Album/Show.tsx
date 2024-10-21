import { useState } from "react";
import { Album, ModalOptions } from "@/types";
import AlbumCard from "@/Components/Cards/AlbumCard";
import TrackTable from "@/Components/Tables/TrackTable";
import RequestModal from "@/Components/Modals/RequestModal";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface ShowProps {
    album: Album;
}

const Show = ({ album }: ShowProps) => {
    const [modalOptions, setModalOptions] = useState<ModalOptions>({
        show: false,
        track: null,
    });

    const closeModal = () => {
        setModalOptions({
            ...modalOptions,
            show: false,
        });
    };

    return (
        <>
            <AlbumCard album={album} />
            <div className="flex flex-col gap-10">
                <TrackTable
                    tracks={album.tracks}
                    showImage={false}
                    setModalOptions={setModalOptions}
                />
            </div>
            <RequestModal
                show={modalOptions.show}
                track={modalOptions.track}
                onClose={closeModal}
            />
        </>
    );
};

Show.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Album" children={page} />
);

export default Show;
