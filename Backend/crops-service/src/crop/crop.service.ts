import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CropCreateDTO } from './dto/create-crop.input';
import { CropUpdateDTO } from './dto/update-crop.input';
import { Crop } from './entity/crop.entity';

@Injectable()
export class CropService {

    cropToBeUpdate:any;

    constructor(@InjectRepository(Crop) private cropRepository:Repository<Crop>){}

    async findAll():Promise<Crop[]> {  
       return this.cropRepository.find();
    }

    async findOne(id:string) {
        return this.cropRepository.findOne(id)
    }

    async create(crop: CropCreateDTO): Promise<Crop> {
        let gar = this.cropRepository.create(crop);
    ////////////////////////////////////////
        return this.cropRepository.save(gar);
    }

    async update(id:string, crop:CropUpdateDTO) : Promise<any> {
        this.cropToBeUpdate = {
            "id":id,
            "crop": crop.crop,
            "GardenId": crop.GardenId,
            "soilMoisture": crop.soilMoisture,
            "airTemperature": crop.airTemperature,
            "fertilizerLevels": crop.fertilizerLevels,
            "amount": crop.amount,
            "unitPrice": crop.unitPrice
        }
       return this.cropRepository.save(this.cropToBeUpdate);
    }

    async delete(id:string): Promise<DeleteResult> {
        return this.cropRepository.delete(id);
    }

}
