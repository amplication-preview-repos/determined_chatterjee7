import { NoteUpdateManyWithoutNotebooksInput } from "./NoteUpdateManyWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotebookUpdateInput = {
  description?: string | null;
  notes?: NoteUpdateManyWithoutNotebooksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
