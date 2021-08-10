import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { MaintainCreateDTO } from './dto/create-maintain.input';
import { MaintainUpdateDTO } from './dto/update-maintain.input';
import { Maintain } from './entity/maintain.entity';

@Injectable()
export class MaintainService {

    maintainToBeUpdate:any;


    constructor(@InjectRepository(Maintain) private maintainRepository:Repository<Maintain>){}

    async findAll():Promise<Maintain[]> {  
       return this.maintainRepository.find();
    }

    async findOne(id:string) {
        return this.maintainRepository.findOne(id)
    }

    async create(monitor: MaintainCreateDTO): Promise<Maintain> {
        let gar = this.maintainRepository.create(monitor);
        return this.maintainRepository.save(gar);
    }

    async update(id:string, maintain:MaintainUpdateDTO) : Promise<any> {
        this.maintainToBeUpdate = {
            "id":id,
            "plan": maintain.plan,
            "removeWeeds": maintain.removeWeeds,
            "activity": maintain.activity,
            "waterlevel": maintain.waterlevel,
            "requiredTimeInMins": maintain.requiredTimeInMins
        }
       return this.maintainRepository.save(this.maintainToBeUpdate);
    }

    async delete(id:string): Promise<DeleteResult> {
        return this.maintainRepository.delete(id);
    }
}
