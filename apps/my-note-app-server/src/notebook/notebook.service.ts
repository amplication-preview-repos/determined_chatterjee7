import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotebookServiceBase } from "./base/notebook.service.base";

@Injectable()
export class NotebookService extends NotebookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
