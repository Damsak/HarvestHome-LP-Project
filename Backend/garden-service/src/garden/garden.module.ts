import { Module } from '@nestjs/common';
import { GardenService } from './garden.service';
import { GardenResolver } from './garden.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garden } from './entity/garden.entity';
import { ProfileResolver } from './profile.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Garden])],
  providers: [GardenService, GardenResolver, ProfileResolver],
  exports:[GardenService]
})
export class GardenModule {}
