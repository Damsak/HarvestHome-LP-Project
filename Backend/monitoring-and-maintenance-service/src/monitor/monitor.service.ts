import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository} from 'typeorm';
import { MonitorCreateDTO } from './dto/create-monitor.input';
import { Monitor } from './entity/monitor.entity';

@Injectable()
export class MonitorService {


    constructor(@InjectRepository(Monitor) private monitorRepository:Repository<Monitor>){}

    averageFactors:any;

    async findAll():Promise<Monitor[]> {  
       return this.monitorRepository.find();
    }

    async findOne(id:string) {
        return this.monitorRepository.findOne(id)
    }

    async create(monitor: MonitorCreateDTO): Promise<Monitor> {
        let gar = this.monitorRepository.create(monitor);
        ////////////////////////////////////////
        return this.monitorRepository.save(gar);
    }


    // async GetAverageFactors(): Promise<Monitor[]> {
        
    //      return this.monitorRepository.find();
    // }
}
