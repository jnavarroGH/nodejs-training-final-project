import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://root:rootpassword@localhost:27017')],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
