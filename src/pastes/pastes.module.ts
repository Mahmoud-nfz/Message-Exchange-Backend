import { Module } from '@nestjs/common';
import { PastesController } from './pastes.controller';
import { PastesService } from './pastes.service';

@Module({
  controllers: [PastesController],
  providers: [PastesService]
})
export class PastesModule {}
