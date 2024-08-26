import { CalendarListRelationFilter } from "../calendar/CalendarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotebookListRelationFilter } from "../notebook/NotebookListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  calendars?: CalendarListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notebooks?: NotebookListRelationFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
