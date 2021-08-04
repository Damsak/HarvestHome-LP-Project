import { Module } from '@nestjs/common';
import { CropService } from './crop.service';
import { CropResolver } from './crop.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crop } from './entity/crop.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Crop])],
  providers: [CropService, CropResolver],
  exports:[CropService]
})
export class CropModule {}
