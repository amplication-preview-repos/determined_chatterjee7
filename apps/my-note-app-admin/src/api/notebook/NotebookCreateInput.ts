import { NoteCreateNestedManyWithoutNotebooksInput } from "./NoteCreateNestedManyWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotebookCreateInput = {
  description?: string | null;
  notes?: NoteCreateNestedManyWithoutNotebooksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
