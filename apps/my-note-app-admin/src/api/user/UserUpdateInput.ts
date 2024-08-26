import { CalendarUpdateManyWithoutUsersInput } from "./CalendarUpdateManyWithoutUsersInput";
import { NotebookUpdateManyWithoutUsersInput } from "./NotebookUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  calendars?: CalendarUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notebooks?: NotebookUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
