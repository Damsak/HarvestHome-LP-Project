import { Module } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { MonitorResolver } from './monitor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monitor } from './entity/monitor.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Monitor])],
  providers: [MonitorService, MonitorResolver],
  exports:[MonitorService]
})
export class MonitorModule {}
