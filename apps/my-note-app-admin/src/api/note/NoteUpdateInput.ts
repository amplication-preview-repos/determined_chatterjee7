import { NotebookWhereUniqueInput } from "../notebook/NotebookWhereUniqueInput";

export type NoteUpdateInput = {
  content?: string | null;
  notebook?: NotebookWhereUniqueInput | null;
  title?: string | null;
};
