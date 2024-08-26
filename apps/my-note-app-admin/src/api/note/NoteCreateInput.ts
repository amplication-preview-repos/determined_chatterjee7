import { NotebookWhereUniqueInput } from "../notebook/NotebookWhereUniqueInput";

export type NoteCreateInput = {
  content?: string | null;
  notebook?: NotebookWhereUniqueInput | null;
  title?: string | null;
};
