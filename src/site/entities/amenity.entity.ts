import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class Amenity {
  @ObjectIdColumn()
  _id: ObjectId

  @Column()
  name: string
}
