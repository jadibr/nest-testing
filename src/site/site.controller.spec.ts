import { Test, TestingModule } from "@nestjs/testing"
import { SiteController } from "./site.controller"
import { SiteService } from "./site.service"
import { SiteDto } from "./dto/site.dto"
import { getModelToken } from "@nestjs/mongoose"

describe("SiteController", () => {
  let controller: SiteController
  let service: SiteService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteController],
      providers: [
        SiteService,
        {
          provide: getModelToken("Site"),
          useValue: {}, // the shape of the mocked repository shouldn't matter as in controller test
          // the values of the mocked service (with spyOn()) should be returned
          // irrelevant of the mocked repository
        },
      ],
    }).compile()

    controller = module.get<SiteController>(SiteController)
    service = module.get<SiteService>(SiteService)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })

  describe("GET", () => {
    it("should return sites returned by the service", async () => {
      const sites = [
        new SiteDto(undefined, "site 1", 1),
        new SiteDto(undefined, "site 2", 2),
        new SiteDto(undefined, "site 3", 3),
      ]

      jest.spyOn(service, "findAll").mockImplementation(async () => sites)

      expect(await controller.findAll()).toHaveLength(3)
    })
  })
})
