import { Test, TestingModule } from '@nestjs/testing'
import { SiteService } from './site.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Site } from './entities/site.entity'
import { ObjectId } from 'mongodb'

describe('SiteService', () => {
  // let service: SiteService

  // beforeEach(async () => {
  // })

  async function getMockedService(repositoryMock: object) {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SiteService,
        {
          provide: getRepositoryToken(Site),
          useValue: repositoryMock,
        },
      ],
    }).compile()

    return module.get<SiteService>(SiteService)
  }

  // it('should be defined', () => {
  //   expect(service).toBeDefined()
  // })

  describe('findAll', () => {
    it('should return sites returned by the repository', async () => {
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

      const mockedService = await getMockedService({
        find: jest.fn(async () => sites),
      })

      expect(await mockedService.findAll()).toHaveLength(3)
    })
  })
})
