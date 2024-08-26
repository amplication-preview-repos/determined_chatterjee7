import { Calendar } from "../calendar/Calendar";
import { Notebook } from "../notebook/Notebook";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  calendars?: Array<Calendar>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notebooks?: Array<Notebook>;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
