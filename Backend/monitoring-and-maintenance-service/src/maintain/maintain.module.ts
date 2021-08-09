import { Module } from '@nestjs/common';
import { MaintainService } from './maintain.service';
import { MaintainResolver } from './maintain.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maintain } from './entity/maintain.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Maintain])],
  providers: [MaintainService, MaintainResolver],
  exports:[MaintainService]
})
export class MaintainModule {}
