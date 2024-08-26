import { User } from "../user/User";

export type Calendar = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
