import { router } from "@inertiajs/react";

const RefreshButton = () => {
    return (
        <button
            type="button"
            onClick={() => router.reload()}
            className="rounded-md border border-gray-400 dark:border-gray-600 p-2 bg-white dark:bg-boxdark"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#5f6368"
            >
                <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
            </svg>
        </button>
    );
};

export default RefreshButton;
