import moment from "moment";

export const formatTime = (seconds: number) => {
  const duration = moment.duration(seconds, "seconds");

  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  return `${hours}h ${minutes}m`;
};
