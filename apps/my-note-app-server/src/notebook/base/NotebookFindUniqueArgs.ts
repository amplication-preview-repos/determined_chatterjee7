/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotebookWhereUniqueInput } from "./NotebookWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class NotebookFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => NotebookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotebookWhereUniqueInput)
  @Field(() => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;
}

export { NotebookFindUniqueArgs as NotebookFindUniqueArgs };
