import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotebookWhereUniqueInput } from "../notebook/NotebookWhereUniqueInput";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  notebook?: NotebookWhereUniqueInput;
  title?: StringNullableFilter;
};
