interface TableSwitchButtonProps {
    table: string;
    setTable: React.Dispatch<React.SetStateAction<string>>;
}

const TableSwitchButton = ({ table, setTable }: TableSwitchButtonProps) => {
    return (
        <div className="flex items-center p-6.5 bg-white dark:bg-boxdark">
            <button
                type="button"
                onClick={() => setTable("queue")}
                className={
                    "inline-flex rounded-l-lg border py-1 px-2 font-medium hover:border-primary hover:bg-primary hover:text-white sm:py-3 sm:px-6 " +
                    (table === "queue"
                        ? "border-primary bg-primary text-white dark:hover:border-primary"
                        : "border-stroke text-black dark:border-strokedark dark:text-white dark:hover:border-primary")
                }
            >
                Queue
            </button>
            <button
                type="button"
                onClick={() => setTable("recent")}
                className={
                    "inline-flex rounded-r-lg border py-1 px-2 font-medium hover:border-primary hover:bg-primary hover:text-white sm:py-3 sm:px-6 " +
                    (table === "recent"
                        ? "border-primary bg-primary text-white dark:hover:border-primary"
                        : "border-stroke text-black dark:border-strokedark dark:text-white dark:hover:border-primary")
                }
            >
                Recently Played
            </button>
        </div>
    );
};

export default TableSwitchButton;
