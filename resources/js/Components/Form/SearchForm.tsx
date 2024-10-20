import { useForm } from "@inertiajs/react";

interface SearchFormProps {
    filters: {
        q: string;
        type: string;
    };
}

const SearchForm = ({ filters }: SearchFormProps) => {
    const { data, setData, get, processing } = useForm({
        q: filters.q,
        type: filters.type,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        get(route("search.index"));
    };

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Search Fields
                </h3>
            </div>
            <div className="flex items-center rounded-lg p-6.5">
                <button
                    type="button"
                    onClick={() => setData("type", "artist")}
                    className={
                        "inline-flex rounded-l-lg border py-1 px-2 font-medium hover:border-primary hover:bg-primary hover:text-white sm:py-3 sm:px-6 " +
                        (data.type === "artist"
                            ? "border-primary bg-primary text-white dark:hover:border-primary"
                            : "border-stroke text-black dark:border-strokedark dark:text-white dark:hover:border-primary")
                    }
                >
                    Artist
                </button>
                <button
                    type="button"
                    onClick={() => setData("type", "album")}
                    className={
                        "inline-flex border-y py-1 px-2 font-medium hover:border-primary hover:bg-primary hover:text-white sm:py-3 sm:px-6 " +
                        (data.type === "album"
                            ? "border-primary bg-primary text-white dark:hover:border-primary"
                            : "border-stroke text-black dark:border-strokedark dark:text-white dark:hover:border-primary")
                    }
                >
                    Album
                </button>
                <button
                    type="button"
                    onClick={() => setData("type", "track")}
                    className={
                        "inline-flex rounded-r-lg border py-1 px-2 font-medium hover:border-primary hover:bg-primary hover:text-white sm:py-3 sm:px-6 " +
                        (data.type === "track"
                            ? "border-primary bg-primary text-white dark:hover:border-primary"
                            : "border-stroke text-black dark:border-strokedark dark:text-white dark:hover:border-primary")
                    }
                >
                    Track
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-3 p-6.5 pt-0">
                    <button type="submit" disabled={processing}>
                        <svg
                            className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                fill=""
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                fill=""
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        value={data.q}
                        onChange={(e) => setData("q", e.target.value)}
                        placeholder="Type to search..."
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
