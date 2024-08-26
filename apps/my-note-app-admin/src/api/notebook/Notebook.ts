import { Note } from "../note/Note";
import { User } from "../user/User";

export type Notebook = {
  createdAt: Date;
  description: string | null;
  id: string;
  notes?: Array<Note>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
