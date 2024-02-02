import { Module } from "@nestjs/common"
import { SiteService } from "./site.service"
import { SiteController } from "./site.controller"
import { SiteSchema } from "./entities/site.entity"
import { MongooseModule } from "@nestjs/mongoose"
import { AmenitySchema } from "./entities/amenity.entity"

@Module({
  controllers: [SiteController],
  providers: [SiteService],
  imports: [
    MongooseModule.forFeature([
      { name: "Site", schema: SiteSchema },
      { name: "Amenity", schema: AmenitySchema },
    ]),
  ],
})
export class SiteModule {}
