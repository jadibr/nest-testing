import { Injectable } from "@nestjs/common"
import { SiteDto } from "./dto/site.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Site } from "./entities/site.entity"
import { Repository } from "typeorm"
import { ObjectId } from "mongodb"

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}

  async create(siteDto: SiteDto): Promise<SiteDto> {
    const createdSite = await this.siteRepository.save(
      SiteDto.convertToEntity(siteDto),
    )
    return SiteDto.convertToDto(createdSite)
  }

  async findAll() {
    return await this.siteRepository.find()
  }

  async findOne(siteId: string) {
    return await this.siteRepository.findOneBy({ _id: new ObjectId(siteId) })
  }

  async update(id: number, siteDto: SiteDto) {
    return `This action updates a #${id} site`
  }

  async remove(id: number) {
    return `This action removes a #${id} site`
  }
}
