import { CalendarWhereInput } from "./CalendarWhereInput";
import { CalendarOrderByInput } from "./CalendarOrderByInput";

export type CalendarFindManyArgs = {
  where?: CalendarWhereInput;
  orderBy?: Array<CalendarOrderByInput>;
  skip?: number;
  take?: number;
};
