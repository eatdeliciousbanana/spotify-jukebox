import { useState } from "react";
import { ModalOptions, Playback, Track } from "@/types";
import RefreshButton from "@/Components/Buttons/RefreshButton";
import PlaybackCard from "@/Components/Cards/PlaybackCard";
import TrackTable from "@/Components/Tables/TrackTable";
import RequestModal from "@/Components/Modals/RequestModal";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface DashboardProps {
    playback: Playback;
    recent: Track[];
}

const Dashboard = ({ playback, recent }: DashboardProps) => {
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
            <div className="mb-2">
                <RefreshButton />
            </div>

            <PlaybackCard playback={playback} />

            <div className="flex flex-col gap-10">
                <TrackTable
                    tracks={recent}
                    showImage={true}
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

Dashboard.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Dashboard" children={page} />
);

export default Dashboard;
