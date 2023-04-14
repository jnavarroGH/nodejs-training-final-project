

import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/Infra/Schema/identifiable-entity.schema';
import { Injectable } from '@nestjs/common';
@Schema({ versionKey: false, collection: 'campers' })
@Injectable()
export class CamperSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name: string;

  @Prop()
  readonly age: number;

  @Prop()
  readonly allergies: string[];
}
