import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Garden } from "./entity/garden.entity";
import { Profile } from "./entity/profile.entity";
import { GardenService } from "./garden.service";


@Resolver((of)=>Profile)
export class ProfileResolver {

    constructor(private readonly gardenService:GardenService){}

    //resolve gardens field in profile.entity
    @ResolveField((of) => [Garden])
    gardens(@Parent() profile:Profile):Promise<Garden[]> {
        console.log('resolving profiles' + profile.id)
        return this.gardenService.forProfile(profile.id)
    }

}