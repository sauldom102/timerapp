import {format, isToday, isTomorrow, isYesterday} from 'date-fns';

const formatDateForList = (date: Date) => {
  const monthAndDay = format(date, 'MMMM d');

  if (isToday(date)) {
    return `Today, ${monthAndDay}`;
  } else if (isYesterday(date)) {
    return `Yesterday, ${monthAndDay}`;
  } else if (isTomorrow(date)) {
    return `Tomorrow, ${monthAndDay}`;
  }

  return format(date, 'EEEE, MMMM d');
};

export default formatDateForList;
