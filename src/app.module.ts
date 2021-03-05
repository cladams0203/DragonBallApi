import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { db } from './config/dbConfig';

@Module({
  imports: [CharactersModule, TypeOrmModule.forRoot(db)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
