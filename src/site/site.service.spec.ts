import { Test, TestingModule } from "@nestjs/testing"
import { SiteService } from "./site.service"
import { getModelToken } from "@nestjs/mongoose"
import { ISite } from "./entities/site.entity"

describe("SiteService", () => {
  // let service: SiteService

  // beforeEach(async () => {
  // })

  async function getMockedService(repositoryMock: object) {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SiteService,
        {
          provide: getModelToken("Site"),
          useValue: repositoryMock,
        },
      ],
    }).compile()

    return module.get<SiteService>(SiteService)
  }

  // it('should be defined', () => {
  //   expect(service).toBeDefined()
  // })

  describe("findAll", () => {
    it("should return sites returned by the repository", async () => {
      const sitesDocs: ISite[] = [
        { id: "1", name: "site 1", x: 1 } as ISite,
        { id: "2", name: "site 2", x: 2 } as ISite,
        { id: "3", name: "site 3", x: 3 } as ISite,
      ]

      const mockedService = await getMockedService({
        find: jest.fn(async () => sitesDocs),
      })

      expect(await mockedService.findAll()).toHaveLength(3)
    })
  })
})
