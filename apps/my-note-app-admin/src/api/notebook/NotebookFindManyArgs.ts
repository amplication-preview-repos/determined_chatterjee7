import { NotebookWhereInput } from "./NotebookWhereInput";
import { NotebookOrderByInput } from "./NotebookOrderByInput";

export type NotebookFindManyArgs = {
  where?: NotebookWhereInput;
  orderBy?: Array<NotebookOrderByInput>;
  skip?: number;
  take?: number;
};
