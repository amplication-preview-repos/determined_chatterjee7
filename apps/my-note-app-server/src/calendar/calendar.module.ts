import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CalendarModuleBase } from "./base/calendar.module.base";
import { CalendarService } from "./calendar.service";
import { CalendarController } from "./calendar.controller";
import { CalendarResolver } from "./calendar.resolver";

@Module({
  imports: [CalendarModuleBase, forwardRef(() => AuthModule)],
  controllers: [CalendarController],
  providers: [CalendarService, CalendarResolver],
  exports: [CalendarService],
})
export class CalendarModule {}
