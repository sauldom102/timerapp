const displayFromHMS = (
  hours: number,
  minutes: number,
  seconds: number = 0,
) => {
  let timeString = '';

  if (hours > 0) {
    timeString += `${hours}h`;
  }

  if (minutes > 0) {
    timeString += ` ${minutes}min`;
  }

  if (minutes === 0 && seconds > 0) {
    timeString += '1min';
  }

  return timeString;
};

export const displayDurationFromDate = (date: Date, def: string) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (hours === 0 && minutes === 0) {
    return def;
  }

  return displayFromHMS(hours, minutes);
};

export const displayDurationFromSeconds = (seconds: number, def: string) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const res = displayFromHMS(hours, minutes, seconds % 3600);

  if (!res) {
    return def;
  }

  return res;
};

export const displayTimerFromSeconds = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  if (hours > 0) {
    const formattedHours = String(hours).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return `${formattedMinutes}:${formattedSeconds}`;
};
