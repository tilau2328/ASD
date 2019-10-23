import { Module } from '@nestjs/common';
import {AppApiModule} from "./api/app.api.module";
import {AppDataModule} from "./data/app.data.module";

@Module({
  imports: [
    AppApiModule,
    AppDataModule,
  ],
})
export class AppModule {}
