import { Injectable } from "@nestjs/common"
import { SiteDto } from "./dto/site.dto"
import { ISite } from "./entities/site.entity"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

@Injectable()
export class SiteService {
  constructor(
    @InjectModel("Site")
    private readonly siteModel: Model<ISite>,
  ) {}

  async create(siteDto: SiteDto): Promise<SiteDto> {
    const createdSite = await this.siteModel.create(
      SiteDto.convertToEntity(this.siteModel, siteDto),
    )
    return SiteDto.convertToDto(createdSite)
  }

  async findAll(): Promise<SiteDto[]> {
    return (await this.siteModel.find()).map((s) => SiteDto.convertToDto(s))
  }

  async findOne(siteId: string): Promise<SiteDto> {
    return await this.siteModel.findById(siteId)
  }

  async update(id: number, siteDto: SiteDto) {
    return `This action updates a #${id} site`
  }

  async remove(id: number) {
    return `This action removes a #${id} site`
  }
}
