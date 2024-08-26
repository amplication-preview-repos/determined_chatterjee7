import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  color?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
};
