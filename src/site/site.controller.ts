import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { SiteService } from './site.service'
import { SiteDto } from './dto/site.dto'

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  async create(@Body() siteDto: SiteDto) {
    return await this.siteService.create(siteDto)
  }

  @Get()
  async findAll() {
    return await this.siteService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.siteService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() siteDto: SiteDto) {
    return this.siteService.update(+id, siteDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.siteService.remove(+id)
  }
}
