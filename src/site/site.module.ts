import { Module } from "@nestjs/common"
import { SiteService } from "./site.service"
import { SiteController } from "./site.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Site } from "./entities/site.entity"

@Module({
  controllers: [SiteController],
  providers: [SiteService],
  imports: [TypeOrmModule.forFeature([Site])],
})
export class SiteModule {}
