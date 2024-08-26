import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
