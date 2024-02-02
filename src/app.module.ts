import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { SiteModule } from "./site/site.module"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { BootstrapService } from "./bootstrap/bootstrap.service"

@Module({
  imports: [
    SiteModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/nest-test?authMechanism=DEFAULT&authSource=admin`,
      {
        connectTimeoutMS: 5000,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService, BootstrapService],
})
export class AppModule {}
