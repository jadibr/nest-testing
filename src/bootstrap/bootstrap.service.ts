import { Injectable, OnApplicationBootstrap } from "@nestjs/common"
import { database, up } from "migrate-mongo"

@Injectable()
export class BootstrapService implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    const { db, client } = await database.connect()
    await up(db, client)
    await client.close()
  }
}
