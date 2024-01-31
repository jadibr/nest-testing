import 'dotenv/config'
import { DataSource } from 'typeorm'

export default new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: process.env.MONGO_INITDB_ROOT_USERNAME,
  password: process.env.MONGO_INITDB_ROOT_PASSWORD,
  authSource: 'admin',
  database: 'nest-test',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
})
