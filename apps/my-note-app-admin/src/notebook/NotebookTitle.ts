import { Notebook as TNotebook } from "../api/notebook/Notebook";

export const NOTEBOOK_TITLE_FIELD = "title";

export const NotebookTitle = (record: TNotebook): string => {
  return record.title?.toString() || String(record.id);
};
