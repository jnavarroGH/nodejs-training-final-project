import { Module, forwardRef } from '@nestjs/common';
import { CamperFactory } from 'src/Domain/factory/camper.factory';
import { CamperSchemaFactory } from 'src/Domain/factory/camper-schema.factory';
import { InfraModule } from 'src/Infra/infra.module';
import { AppModule } from 'src/App/app.module';
@Module({
    imports: [forwardRef(()=>AppModule),forwardRef(()=>InfraModule)],
    providers: [
      CamperSchemaFactory,
      CamperFactory,
    ],
    exports: [
      CamperSchemaFactory,
      CamperFactory,
    ]
    
})

export class DomainModule {}