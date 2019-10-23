import { Module } from '@nestjs/common';
import {AppApiModule} from "./api/app.api.module";

@Module({
  imports: [AppApiModule],
})
export class AppModule {}
