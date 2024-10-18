import TableOne from "@/Components/Tables/TableOne";
import TableTwo from "@/Components/Tables/TableTwo";
import TableThree from "@/Components/Tables/TableThree";
import DefaultLayout from "@/Layouts/DefaultLayout";

const Album = ({ album }) => {
    console.log(album);

    return (
        <>
            <div className="flex flex-col gap-10">
                <TableOne />
                <TableTwo />
                <TableThree />
            </div>
        </>
    );
};

Album.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Album" children={page} />
);

export default Album;
