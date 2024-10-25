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
                <SuccessMessage message="You are logged in to spotify">
                    <a
                        href={route("login.spotify")}
                        className="inline-block mt-3 rounded-md bg-primary py-3 px-7 text-center font-medium text-white hover:bg-opacity-90"
                    >
                        Change Spotify Account
                    </a>
                </SuccessMessage>
            ) : (
                <AttentionMessage message="You are not logged in to spotify">
                    <a
                        href={route("login.spotify")}
                        className="inline-block mt-3 rounded-md bg-primary py-3 px-7 text-center font-medium text-white hover:bg-opacity-90"
                    >
                        Login to spotify
                    </a>
                </AttentionMessage>
            )}
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Spotify Login" children={page} />
);

export default Index;
