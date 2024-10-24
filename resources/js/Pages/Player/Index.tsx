import { Device } from "@/types";
import DeviceCard from "@/Components/Cards/DeviceCard";
import AttentionMessage from "@/Components/Messages/AttentionMessage";
import DefaultLayout from "@/Layouts/DefaultLayout";

interface IndexProps {
    devices: Device[];
}

const Index = ({ devices }: IndexProps) => {
    return (
        <>
            {devices.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7.5">
                    {devices.map((device, key) => (
                        <DeviceCard key={key} device={device} />
                    ))}
                </div>
            ) : (
                <AttentionMessage message="No device detected" />
            )}
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <DefaultLayout title="Player" children={page} />
);

export default Index;
