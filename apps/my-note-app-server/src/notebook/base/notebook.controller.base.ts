/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { NotebookService } from "../notebook.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NotebookCreateInput } from "./NotebookCreateInput";
import { Notebook } from "./Notebook";
import { NotebookFindManyArgs } from "./NotebookFindManyArgs";
import { NotebookWhereUniqueInput } from "./NotebookWhereUniqueInput";
import { NotebookUpdateInput } from "./NotebookUpdateInput";
import { NoteFindManyArgs } from "../../note/base/NoteFindManyArgs";
import { Note } from "../../note/base/Note";
import { NoteWhereUniqueInput } from "../../note/base/NoteWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NotebookControllerBase {
  constructor(
    protected readonly service: NotebookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Notebook })
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createNotebook(
    @common.Body() data: NotebookCreateInput
  ): Promise<Notebook> {
    return await this.service.createNotebook({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Notebook] })
  @ApiNestedQuery(NotebookFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async notebooks(@common.Req() request: Request): Promise<Notebook[]> {
    const args = plainToClass(NotebookFindManyArgs, request.query);
    return this.service.notebooks({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Notebook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async notebook(
    @common.Param() params: NotebookWhereUniqueInput
  ): Promise<Notebook | null> {
    const result = await this.service.notebook({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Notebook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateNotebook(
    @common.Param() params: NotebookWhereUniqueInput,
    @common.Body() data: NotebookUpdateInput
  ): Promise<Notebook | null> {
    try {
      return await this.service.updateNotebook({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Notebook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteNotebook(
    @common.Param() params: NotebookWhereUniqueInput
  ): Promise<Notebook | null> {
    try {
      return await this.service.deleteNotebook({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/notes")
  @ApiNestedQuery(NoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "any",
  })
  async findNotes(
    @common.Req() request: Request,
    @common.Param() params: NotebookWhereUniqueInput
  ): Promise<Note[]> {
    const query = plainToClass(NoteFindManyArgs, request.query);
    const results = await this.service.findNotes(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        notebook: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/notes")
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "update",
    possession: "any",
  })
  async connectNotes(
    @common.Param() params: NotebookWhereUniqueInput,
    @common.Body() body: NoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notes: {
        connect: body,
      },
    };
    await this.service.updateNotebook({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notes")
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "update",
    possession: "any",
  })
  async updateNotes(
    @common.Param() params: NotebookWhereUniqueInput,
    @common.Body() body: NoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notes: {
        set: body,
      },
    };
    await this.service.updateNotebook({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notes")
  @nestAccessControl.UseRoles({
    resource: "Notebook",
    action: "update",
    possession: "any",
  })
  async disconnectNotes(
    @common.Param() params: NotebookWhereUniqueInput,
    @common.Body() body: NoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notes: {
        disconnect: body,
      },
    };
    await this.service.updateNotebook({
      where: params,
      data,
      select: { id: true },
    });
  }
}