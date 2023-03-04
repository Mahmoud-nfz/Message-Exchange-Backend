import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PastesModule } from './pastes/pastes.module';

@Module({
  imports: [PastesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
