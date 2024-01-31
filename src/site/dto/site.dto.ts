import { ObjectId } from "mongodb"
import { Site } from "../entities/site.entity"

export class SiteDto {
  constructor(
    public id: string,
    public name: string,
    public x: number,
  ) {}

  static convertToEntity(site: SiteDto): Site {
    const siteEntity = new Site()

    siteEntity._id = new ObjectId(site.id)
    siteEntity.name = site.name
    siteEntity.x = site.x

    return siteEntity
  }

  static convertToDto(siteEntity: Site): SiteDto {
    return new SiteDto(siteEntity._id.toString(), siteEntity.name, siteEntity.x)
  }
}
