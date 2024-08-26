import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotebookService } from "./notebook.service";
import { NotebookControllerBase } from "./base/notebook.controller.base";

@swagger.ApiTags("notebooks")
@common.Controller("notebooks")
export class NotebookController extends NotebookControllerBase {
  constructor(
    protected readonly service: NotebookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
