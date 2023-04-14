import { CreateCamperRequest } from 'src/App/dto/create-camper-request.dto';

export class CreateCamperCommand {
  constructor(public readonly createCamperRequest: CreateCamperRequest) {}
}
