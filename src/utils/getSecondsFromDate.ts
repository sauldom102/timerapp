const getSecondsFromDate = (date: Date) => {
  const hoursInSeconds = date.getHours() * 3600;
  const minutesInSeconds = date.getMinutes() * 60;
  return hoursInSeconds + minutesInSeconds;
};

export default getSecondsFromDate;
