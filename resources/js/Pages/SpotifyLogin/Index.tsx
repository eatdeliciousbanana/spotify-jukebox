import SuccessMessage from "@/Components/Messages/SuccessMessage";
import AttentionMessage from "@/Components/Messages/AttentionMessage";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface IndexProps {
    is_login: boolean;
}

const Index = ({ is_login }: IndexProps) => {
    return (
        <>
            {is_login ? (
                <SuccessMessage message="login" />
            ) : (
                <AttentionMessage message="not login" />
            )}
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Spotify Login" children={page} />
);

export default Index;
