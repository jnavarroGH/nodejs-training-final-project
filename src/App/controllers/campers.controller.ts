import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CamperDto } from 'src/App/dto/camper.dto';
import { CreateCamperCommand } from 'src/App/commands/create-camper/create-camper.command';
import { UpdateAllergiesCommand } from 'src/App/commands/update-allergies/update-allergies.command';
import { CreateCamperRequest } from 'src/App/dto/create-camper-request.dto';
import { UpdateCamperAllergiesRequest } from 'src/App/dto/update-camper-allergies-request.dto';
import { CampersQuery } from 'src/App/queries/campers.query';
import { FindCampersByIdQuery} from 'src/App/queries/find-campers-by-id.query';

@Controller('campers')
export class CampersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async getCamper(@Param('id') camperId: string): Promise<void> {
    return this.queryBus.execute<FindCampersByIdQuery>(new FindCampersByIdQuery(camperId));
  }
    
  @Get()
  async getCampers(): Promise<CamperDto[]> {
    return this.queryBus.execute<CampersQuery, CamperDto[]>(new CampersQuery());
  }

  @Post()
  async createCamper(
    @Body() createCamperRequest: CreateCamperRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateCamperCommand, void>(
      new CreateCamperCommand(createCamperRequest),
    );
  }

  @Patch(':id/allergies')
  async updateCamperAllergies(
    @Param('id') camperId: string,
    @Body() updateCamperAllergiesRequest: UpdateCamperAllergiesRequest,
  ): Promise<void> {
    await this.commandBus.execute<UpdateAllergiesCommand, void>(
      new UpdateAllergiesCommand(
        camperId,
        updateCamperAllergiesRequest.allergies,
      ),
    );
  }
}
