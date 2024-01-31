import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { SiteModule } from "./site/site.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [
    SiteModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      username: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      authSource: "admin",
      database: "nest-test",
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
      migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
