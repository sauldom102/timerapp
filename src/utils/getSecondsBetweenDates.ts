const getSecondsBetweenDates = (date1: Date, date2: Date) => {
  const milliseconds = Math.abs(date1.getTime() - date2.getTime());
  const seconds = Math.floor(milliseconds / 1000);
  return seconds;
};

export default getSecondsBetweenDates;
