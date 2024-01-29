import { Test, TestingModule } from '@nestjs/testing'
import { SiteController } from './site.controller'
import { SiteService } from './site.service'
import { Site } from './entities/site.entity'
import { ObjectId } from 'mongodb'
import { getRepositoryToken } from '@nestjs/typeorm'

describe('SiteController', () => {
  let controller: SiteController
  let service: SiteService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteController],
      providers: [
        SiteService,
        {
          provide: getRepositoryToken(Site),
          useValue: {}, // the shape of the mocked repository shouldn't matter as in controller test
          // the values of the mocked service (with spyOn()) should be returned
          // irrelevant of the mocked repository
        },
      ],
    }).compile()

    controller = module.get<SiteController>(SiteController)
    service = module.get<SiteService>(SiteService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('GET', () => {
    it('should return sites returned by the service', async () => {
      const site1 = new Site()
      site1._id = new ObjectId('123456789012345678901234')
      site1.name = 'site 1'
      site1.x = 1

      const site2 = new Site()
      site2._id = new ObjectId('123456789012345678901235')
      site2.name = 'site 2'
      site2.x = 2

      const site3 = new Site()
      site3._id = new ObjectId('123456789012345678901236')
      site3.name = 'site 3'
      site3.x = 3

      const sites = [site1, site2, site3]

      jest.spyOn(service, 'findAll').mockImplementation(async () => sites)

      expect(await controller.findAll()).toHaveLength(3)
    })
  })
})
