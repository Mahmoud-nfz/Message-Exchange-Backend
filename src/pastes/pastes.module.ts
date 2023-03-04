import { Module } from '@nestjs/common';
import { PastesController } from './pastes.controller';
import { PastesService } from './pastes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paste } from './paste.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paste])
  ],
  controllers: [PastesController],
  providers: [PastesService]
})
export class PastesModule {}
