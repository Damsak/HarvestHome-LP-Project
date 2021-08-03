
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { MonitorCreateDTO } from './dto/create-monitor.input';
import { MonitorService } from './monitor.service';
import { Monitor } from './entity/monitor.entity';


@Resolver(()=> Monitor)
export class MonitorResolver {
    results:any;

    constructor(private monitorService:MonitorService) {}

    @Query(()=> [Monitor],{name:"getAllMonitorRecords"})
    findAll(){
        return this.monitorService.findAll();
    }

    @Query(()=> Monitor, {name:"MonitorRecord"})
    findOne(@Args("id") id: string){
        return this.monitorService.findOne(id);
    }

    @Mutation(()=> Monitor, {name:"createMonitorRecord"})
    create(@Args('monitorInput') monitor:MonitorCreateDTO){
        return this.monitorService.create(monitor);
    }

    // @Query(()=> Monitor, {name:"MonitorGetAverageFactors"})
    // GetAverageFactors(){  
    //     return this.monitorService.GetAverageFactors();
    // }

}
