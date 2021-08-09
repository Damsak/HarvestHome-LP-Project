
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { MaintainCreateDTO } from './dto/create-maintain.input';
import { MaintainService } from './maintain.service';
import { Maintain } from './entity/maintain.entity';


@Resolver(()=> Maintain)
export class MaintainResolver {
    results:any;

    constructor(private maintainService:MaintainService) {}

    @Query(()=> [Maintain],{name:"getAllMaintainRecords"})
    findAll(){
        return this.maintainService.findAll();
    }

    @Query(()=> Maintain, {name:"MaintainRecord"})
    findOne(@Args("id") id: string){
        return this.maintainService.findOne(id);
    }

    @Mutation(()=> Maintain, {name:"createMaintainRecord"})
    create(@Args('maintainInput') monitor:MaintainCreateDTO){
        return this.maintainService.create(monitor);
    }

}
