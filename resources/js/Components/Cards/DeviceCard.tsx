import { Device } from "@/types";
import { Link, router } from "@inertiajs/react";

interface DeviceCardProps {
    device: Device;
}

const DeviceCard = ({ device }: DeviceCardProps) => {
    return (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="w-full bg-meta-2 dark:bg-meta-4">
                {device.type.toLowerCase() === "computer" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#5f6368"
                    >
                        <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
                    </svg>
                ) : device.type.toLowerCase() === "smartphone" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#5f6368"
                    >
                        <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#5f6368"
                    >
                        <path d="M680-80H280q-33 0-56.5-23.5T200-160v-640q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v640q0 33-23.5 56.5T680-80Zm0-80v-640H280v640h400ZM480-600q33 0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680q0 33 23.5 56.5T480-600Zm0 400q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280ZM280-800v640-640Z" />
                    </svg>
                )}
            </div>
            <div className="mt-4">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                    {device.name}
                </h4>
            </div>
            {device.is_active &&
            !device.is_private_session &&
            !device.is_restricted ? (
                <>
                    <div className="mt-6 flex">
                        <Link
                            href={route("player.play")}
                            method="post"
                            as="button"
                            type="button"
                            className="inline-flex justify-center rounded-tl-lg border py-2 px-6 w-1/2 border-stroke hover:bg-green-300 dark:border-strokedark dark:hover:bg-green-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="28px"
                                viewBox="0 -960 960 960"
                                width="28px"
                                fill="#5f6368"
                            >
                                <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                            </svg>
                        </Link>
                        <Link
                            href={route("player.pause")}
                            method="post"
                            as="button"
                            type="button"
                            className="inline-flex justify-center rounded-tr-lg border border-l-0 py-2 px-6 w-1/2 border-stroke hover:bg-red-300 dark:border-strokedark dark:hover:bg-red-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="28px"
                                viewBox="0 -960 960 960"
                                width="28px"
                                fill="#5f6368"
                            >
                                <path d="M320-640v320-320Zm-80 400v-480h480v480H240Zm80-80h320v-320H320v320Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex">
                        <Link
                            href={route("player.previous")}
                            method="post"
                            as="button"
                            type="button"
                            className="inline-flex justify-center rounded-bl-lg border border-t-0 py-2 px-6 w-1/2 border-stroke hover:bg-gray-200 dark:border-strokedark dark:hover:bg-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="28px"
                                viewBox="0 -960 960 960"
                                width="28px"
                                fill="#5f6368"
                            >
                                <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
                            </svg>
                        </Link>
                        <Link
                            href={route("player.next")}
                            method="post"
                            as="button"
                            type="button"
                            className="inline-flex justify-center rounded-br-lg border-r border-b py-2 px-6 w-1/2 border-stroke hover:bg-gray-200 dark:border-strokedark dark:hover:bg-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="28px"
                                viewBox="0 -960 960 960"
                                width="28px"
                                fill="#5f6368"
                            >
                                <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
                            </svg>
                        </Link>
                    </div>
                    {device.supports_volume && (
                        <div className="mt-6 flex">
                            <div className="pr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                >
                                    <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
                                </svg>
                            </div>
                            <div className="flex items-center w-full">
                                <input
                                    className="w-11/12"
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue={device.volume_percent}
                                    onMouseUp={(e) =>
                                        router.post(
                                            route("player.changeVolume"),
                                            {
                                                volume_percent: (
                                                    e.target as HTMLInputElement
                                                ).value,
                                            }
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <span className="text-base font-medium">Device not active</span>
            )}
        </div>
    );
};

export default DeviceCard;
