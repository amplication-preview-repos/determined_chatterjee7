import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotebookModuleBase } from "./base/notebook.module.base";
import { NotebookService } from "./notebook.service";
import { NotebookController } from "./notebook.controller";
import { NotebookResolver } from "./notebook.resolver";

@Module({
  imports: [NotebookModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotebookController],
  providers: [NotebookService, NotebookResolver],
  exports: [NotebookService],
})
export class NotebookModule {}
