import { Amenity } from "../site/entities/amenity.entity"
import { MigrationInterface, QueryRunner, Repository } from "typeorm"

export class Initial1706695985657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tolietAmenity = new Amenity()
    tolietAmenity.name = "toilet"

    const repo = new Repository<Amenity>(
      Amenity,
      queryRunner.manager,
      queryRunner,
    )
    repo.save(tolietAmenity)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repo = new Repository<Amenity>(
      Amenity,
      queryRunner.manager,
      queryRunner,
    )
    repo.delete({})
  }
}
