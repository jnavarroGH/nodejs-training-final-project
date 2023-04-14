import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from 'src/Infra/Repository/base-entity.repository';
import { Camper } from 'src/App/cqrs/Camper';
import { CamperSchema } from "src/Infra/Schema/camper.schema";
import { CamperSchemaFactory } from 'src/Domain/factory/camper-schema.factory';

@Injectable()
export class CamperEntityRepository extends BaseEntityRepository<
  CamperSchema,
  Camper
> {
  constructor(
    @InjectModel(CamperSchema.name)
    camperModel: Model<CamperSchema>,
    camperSchemaFactory: CamperSchemaFactory,
  ) {
    super(camperModel, camperSchemaFactory);
  }
}
