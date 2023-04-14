import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CampersController } from 'src/App/controllers/campers.controller';
import { CamperCommandHandlers } from 'src/App/commands';
import { CamperEventHandlers } from 'src/App/events';
import { CamperQueryHandlers } from 'src/App/queries';
import { Camper } from 'src/App/cqrs/Camper';
import { DomainModule } from 'src/Domain/domain.module';
import { InfraModule } from 'src/Infra/infra.module';
@Module({
    imports: [ InfraModule, DomainModule, CqrsModule ],
    controllers: [ CampersController ],
    providers: [
      Camper,
      ...CamperCommandHandlers,
      ...CamperEventHandlers,
      ...CamperQueryHandlers,
    ],
    exports: [
        Camper,
        ...CamperCommandHandlers,
        ...CamperEventHandlers,
        ...CamperQueryHandlers,
    ]
})

export class AppModule {}