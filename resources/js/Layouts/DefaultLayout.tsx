import { useState } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header/index";
import Sidebar from "@/Components/Sidebar/index";
import FlashMessages from "@/Components/Messages/FlashMessages";

interface DefaultLayoutProps {
    title?: string;
    children: React.ReactNode;
}

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head title={title} />
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
                <div className="flex h-screen overflow-hidden">
                    <Sidebar
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        <Header
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                        <main>
                            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                <FlashMessages />
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
