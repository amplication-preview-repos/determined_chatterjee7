import { CalendarCreateNestedManyWithoutUsersInput } from "./CalendarCreateNestedManyWithoutUsersInput";
import { NotebookCreateNestedManyWithoutUsersInput } from "./NotebookCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  calendars?: CalendarCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notebooks?: NotebookCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
