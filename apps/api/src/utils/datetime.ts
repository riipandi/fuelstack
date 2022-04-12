import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // import plugin
import utc from 'dayjs/plugin/utc'; // import plugin
import 'dayjs/locale/id'; // import locale

// dayjs plugins
dayjs.extend(utc);
dayjs.extend(isLeapYear);
dayjs.locale('id');

export function currentDateTimeInUTC() {
  const date = dayjs.utc().format();
  return date;
}

export function expiredDateTimeInUTC(days: number) {
  const date = dayjs.utc().add(days, 'day').format();
  return date;
}

export function isSameDay(date: Date) {
  const now = currentDateTimeInUTC();
  const isEqual = dayjs(now).isSame(date);
  return isEqual;
}

export function isDateExpired(date: Date) {
  const now = currentDateTimeInUTC();
  const isExpired = dayjs(now).isAfter(date);
  return isExpired;
}
