
export const getDurationSince = (date: Date): string => {
    // Get current timestamp (in milliseconds)
    const currentTimestamp = Date.now();

    // Convert previousDate to a Date object (if it's not already)
    const previousTimestamp = new Date(date).getTime();

    // Calculate the difference in milliseconds
    const difference = currentTimestamp - previousTimestamp;

    // Convert the difference to human-readable format
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days !== 1 ? 's' : ''}`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''}`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else {
        return `${seconds} second${seconds !== 1 ? 's' : ''}`;
    }
};
