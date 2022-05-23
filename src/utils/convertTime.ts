export const hmsToSeconds = (duration: string): number => {
  const [hours, minutes, seconds] = duration.split(':');
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
};

export const secondsToHms = (seconds: number): string => {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};
