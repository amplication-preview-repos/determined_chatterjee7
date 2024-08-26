import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotebookWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  notes?: NoteListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
