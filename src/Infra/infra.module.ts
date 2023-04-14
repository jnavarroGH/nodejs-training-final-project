import { Module, forwardRef } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppModule } from 'src/App/app.module';
import { DomainModule } from 'src/Domain/domain.module';
import { CamperDtoRepository } from 'src/Infra/Repository/camper-dto.repository';
import { CamperEntityRepository } from 'src/Infra/Repository/camper-entity.repository';
import { CamperSchema } from "src/Infra/Schema/camper.schema";

@Module({
  imports: [
    forwardRef(() => AppModule),
    forwardRef(() => DomainModule),
    CqrsModule,
  ],
  providers: [
    CamperEntityRepository,
    CamperDtoRepository,
    CamperSchema,
  ],
  exports: [
    CamperEntityRepository,
    CamperDtoRepository,
    CamperSchema,
  ]
})
export class InfraModule {}