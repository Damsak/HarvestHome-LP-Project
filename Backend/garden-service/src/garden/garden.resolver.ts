
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { GardenCreateDTO } from './dto/create-garden.input';
import { GardenUpdateDTO } from './dto/update-garden.input';
import { GardenService } from './garden.service';
import { Garden } from './entity/garden.entity';


@Resolver(()=> Garden)
export class GardenResolver {

    gardenToBeUpdate: GardenUpdateDTO;
    results:any;
    deletedObject:any;

    constructor(private gardenService:GardenService) {}

    @Query(()=> [Garden],{name:"getAllGardens"})
    findAll(){
        return this.gardenService.findAll();
    }

    @Query(()=> Garden, {name:"garden"})
    findOne(@Args("id") id: string){
        return this.gardenService.findOne(id);
    }

    @Mutation(()=> Garden, {name:"createGarden"})
    create(@Args('gardenInput') garden:GardenCreateDTO){
        return this.gardenService.create(garden)
    }

    @Mutation(()=> Garden, {name:"updateGarden"})
    update(@Args('id') id:string ,@Args('gardenUpdateInput') garden:GardenUpdateDTO){

        this.gardenToBeUpdate = {
            "owner": garden.owner,
            "crops": garden.crops,
            "location": garden.location,
            "profileId": garden.profileId,
        }

        console.log("Received  " + id + ">>" + JSON.stringify(garden))
        return this.gardenService.update(id,this.gardenToBeUpdate);
    }

    @Mutation(()=> Garden, {name:"deleteGarden"})
    async delete(@Args("id") id: string){

        this.deletedObject = this.gardenService.findOne(id);

        this.results =  await this.gardenService.delete(id);
        console.log("Returned Val " + JSON.stringify(this.results))

       // {"raw":[],"affected":1}

       // if(this.results.affected == 1) {
            return this.deletedObject;
        //}

        //console.log("ERROR IN DELETE GARDEN");
        
    }


    @ResolveField()
    profile(@Parent() garden:Garden) {
        //tell type and ID of the object. Go and look for someone who has it (Gateway takes this)
        //(Basically go to the profileservice->profileresolver->resolverference method)
        return { __typename:"Profile", id: garden.profileId}
    }

    // @ResolveField(()=> Project)
    // //resolve this from parent and get ProjectId
    // project(@Parent() employee:Employee) {
    //     return this.profileService.getProject(employee.projectId)
    // }
}
