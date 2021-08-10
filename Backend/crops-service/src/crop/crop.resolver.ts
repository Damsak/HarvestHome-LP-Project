
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CropCreateDTO } from './dto/create-crop.input';
import { CropUpdateDTO } from './dto/update-crop.input';
import { CropService } from './crop.service';
import { Crop } from './entity/crop.entity';


@Resolver(()=> Crop)
export class CropResolver {

    cropToBeUpdate: CropUpdateDTO;
    results:any;
    deletedObject:any;

    constructor(private cropService:CropService) {}

    @Query(()=> [Crop],{name:"getAllCrops"})
    findAll(){
        return this.cropService.findAll();
    }

    @Query(()=> Crop, {name:"crop"})
    findOne(@Args("id") id: string){
        return this.cropService.findOne(id);
    }

    @Mutation(()=> Crop, {name:"createCrop"})
    create(@Args('cropInput') crop:CropCreateDTO){
        return this.cropService.create(crop)
    }

    @Mutation(()=> Crop, {name:"updateCrop"})
    update(@Args('id') id:string ,@Args('cropUpdateInput') crop:CropUpdateDTO){

        this.cropToBeUpdate = {
            "crop": crop.crop,
            "GardenId": crop.GardenId,
            "soilMoisture": crop.soilMoisture,
            "airTemperature": crop.airTemperature,
            "fertilizerLevels": crop.fertilizerLevels
        }

        //console.log("Received  " + id + ">>" + JSON.stringify(crop))

        return this.cropService.update(id,this.cropToBeUpdate);
    }

    @Mutation(()=> Crop, {name:"deleteCrop"})
    async delete(@Args("id") id: string){

        this.deletedObject = this.cropService.findOne(id);

        this.results =  await this.cropService.delete(id);
        console.log("Returned Val " + JSON.stringify(this.results))

       // {"raw":[],"affected":1}

       // if(this.results.affected == 1) {
            return this.deletedObject;
        //}

        //console.log("ERROR IN DELETE crop");
        
    }

}
