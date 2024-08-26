import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notebookId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
