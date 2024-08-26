import { SortOrder } from "../../util/SortOrder";

export type CalendarOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
