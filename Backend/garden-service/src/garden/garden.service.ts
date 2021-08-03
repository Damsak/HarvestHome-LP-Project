import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { GardenCreateDTO } from './dto/create-garden.input';
import { GardenUpdateDTO } from './dto/update-garden.input';
import { Garden } from './entity/garden.entity';

@Injectable()
export class GardenService {

    gardenToBeUpdate:any;

    constructor(@InjectRepository(Garden) private gardenRepository:Repository<Garden>){}

    async findAll():Promise<Garden[]> {  
       return this.gardenRepository.find();
    }

    async findOne(id:string) {
        return this.gardenRepository.findOne(id)
    }

    async create(garden: GardenCreateDTO): Promise<Garden> {
        let gar = this.gardenRepository.create(garden);
    ////////////////////////////////////////
        return this.gardenRepository.save(gar);
    }

    async update(id:string, garden:GardenUpdateDTO) : Promise<any> {
        this.gardenToBeUpdate = {
            "id":id,
            "owner": garden.owner,
            "crops": garden.crops,
            "location": garden.location,
            "profileId": garden.profileId,
        }
       return this.gardenRepository.save(this.gardenToBeUpdate);
    }

    async delete(id:string): Promise<DeleteResult> {
        return this.gardenRepository.delete(id);
    }



    async forProfile(id:string) {
        //get profile id and return gardens which belong to that profileId

        return await this.gardenRepository.find({ "profileId":id })
    }


}
