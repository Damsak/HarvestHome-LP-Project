
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { MaintainCreateDTO } from './dto/create-maintain.input';
import { MaintainService } from './maintain.service';
import { Maintain } from './entity/maintain.entity';
import { MaintainUpdateDTO } from './dto/update-maintain.input';


@Resolver(()=> Maintain)
export class MaintainResolver {

    maintainToBeUpdate: MaintainUpdateDTO;
    results:any;
    deletedObject:any;

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

    @Mutation(()=> Maintain, {name:"updateMaintain"})
    update(@Args('id') id:string ,@Args('maintainUpdateInput') maintain:MaintainUpdateDTO){

        this.maintainToBeUpdate = {
            "plan": maintain.plan,
            "removeWeeds": maintain.removeWeeds,
            "activity": maintain.activity,
            "waterlevel": maintain.waterlevel,
            "requiredTimeInMins": maintain.requiredTimeInMins
            }

        //console.log("Received  " + id + ">>" + JSON.stringify(crop))

        return this.maintainService.update(id,this.maintainToBeUpdate);
    }

    @Mutation(()=> Maintain, {name:"deleteMaintain"})
    async delete(@Args("id") id: string){

        this.deletedObject = this.maintainService.findOne(id);

        this.results =  await this.maintainService.delete(id);
        console.log("Returned Val " + JSON.stringify(this.results))

       // {"raw":[],"affected":1}

       // if(this.results.affected == 1) {
            return this.deletedObject;
        //}

        //console.log("ERROR IN DELETE crop");
        
    }




}
