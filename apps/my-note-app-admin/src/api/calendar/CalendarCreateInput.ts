import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
