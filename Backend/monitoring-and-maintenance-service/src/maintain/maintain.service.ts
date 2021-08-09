import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { MaintainCreateDTO } from './dto/create-maintain.input';
import { Maintain } from './entity/maintain.entity';

@Injectable()
export class MaintainService {


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

}
