import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm'

@Entity()
export class Site {
  @ObjectIdColumn()
  _id: ObjectId

  @Column()
  name: string

  @Column()
  x: number
}
