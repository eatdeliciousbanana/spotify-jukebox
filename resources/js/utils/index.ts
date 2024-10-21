export const msToSec = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
