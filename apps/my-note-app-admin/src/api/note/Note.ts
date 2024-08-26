import { Notebook } from "../notebook/Notebook";

export type Note = {
  content: string | null;
  createdAt: Date;
  id: string;
  notebook?: Notebook | null;
  title: string | null;
  updatedAt: Date;
};
