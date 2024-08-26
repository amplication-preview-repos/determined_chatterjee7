import { Calendar as TCalendar } from "../api/calendar/Calendar";

export const CALENDAR_TITLE_FIELD = "name";

export const CalendarTitle = (record: TCalendar): string => {
  return record.name?.toString() || String(record.id);
};
