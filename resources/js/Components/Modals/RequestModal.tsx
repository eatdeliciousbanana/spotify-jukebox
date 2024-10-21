import { Track } from "@/types";
import { msToSec } from "@/utils";
import Modal from "@/Components/Modals/Modal";

interface RequestModalProps {
    show: boolean;
    track: Track | null;
    onClose: () => void;
}

const RequestModal = ({ show, track, onClose }: RequestModalProps) => {
    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-4 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    Request this track?
                </h2>

                <div className="p-3 sm:p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src={track && track.album ? track.album.image : ""}
                            alt="Album"
                        />
                        <div className="pl-4">
                            <h5 className="font-medium text-black">
                                {track && track.name}
                            </h5>
                            <p className="text-sm">
                                {track &&
                                    track.artists.map((artist, key) => (
                                        <span key={key}>
                                            {(key > 0 ? ", " : "") +
                                                artist.name}
                                        </span>
                                    ))}
                            </p>
                        </div>
                    </div>
                    <p className="text-black">
                        {track && msToSec(track.duration_ms)}
                    </p>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md border border-primary py-3 px-7 sm:px-10 text-center font-medium text-primary hover:bg-opacity-90"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="ms-3 rounded-md bg-primary py-3 px-7 sm:px-10 text-center font-medium text-white hover:bg-opacity-90"
                    >
                        Request
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default RequestModal;
