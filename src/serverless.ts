// src/serverless.ts

import { configure as serverlessExpress } from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

let cachedServer;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);

    nestApp.enableCors();
    nestApp.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    // const config = new DocumentBuilder()
    //   .setTitle('Web Tech Training Final Project')
    //   .setDescription('Web Tech Training Final Project')
    //   .setVersion('0.1')
    //   .build();

    // const document = SwaggerModule.createDocument(nestApp, config);

    // SwaggerModule.setup('api', nestApp, document);
    await nestApp.init();
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }

  return cachedServer(event, context);
};
