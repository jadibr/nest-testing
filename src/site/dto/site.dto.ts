import { ISite } from "../entities/site.entity"
import { Model } from "mongoose"

export class SiteDto {
  constructor(
    public id: string,
    public name: string,
    public x: number,
  ) {}

  static convertToEntity(siteModel: Model<ISite>, site: SiteDto): ISite {
    return new siteModel({
      name: site.name,
      x: site.x,
    })
  }

  static convertToDto(siteEntityDoc: ISite): SiteDto {
    return new SiteDto(siteEntityDoc.id, siteEntityDoc.name, siteEntityDoc.x)
  }
}
