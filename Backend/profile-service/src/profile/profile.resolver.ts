
import { Resolver, Query, Mutation, Args, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
// import { Project } from 'src/project/entities/project.entity';
import { ProfileCreateDTO } from './dto/create-profile.input';
import { ProfileService } from './profile.service';
import { Profile } from './entity/profile.entity';
import { ProfileUpdateDTO } from './dto/update-profile.input';

@Resolver(()=> Profile)
export class ProfileResolver {

    profileToBeUpdate:any;

    constructor(private profileService:ProfileService) {}

    @Query(()=> [Profile],{name:"getAllProfiles"})
    findAll(){
        return this.profileService.findAll();
    }

    @Query(()=> Profile,  { name: 'profile' })
    findOne(@Args("id") id: string){
        return this.profileService.findOne(id);
    }

    @Mutation(()=> Profile, {name:"createProfile"})
    create(@Args('profileInput') profile:ProfileCreateDTO){
        return this.profileService.create(profile)
    }

    @Mutation(()=> Profile, {name:"updateProfile"})
    update(@Args('id') id:string ,@Args('profileUpdateInput') profile:ProfileUpdateDTO){

        this.profileToBeUpdate = {
            "id":id,
            "firstName": profile.firstName,
            "lastName": profile.lastName,
            "location": profile.location,
            "goal": profile.goal
        }

        return this.profileService.update(id,this.profileToBeUpdate);
    }

    @Mutation(()=> Profile, {name:"deleteProfile"})
    async delete(@Args("id") id: string){
        return await this.profileService.delete(id);
    }



    // @ResolveField(()=> Project)
    // //resolve this from parent and get ProjectId
    // project(@Parent() employee:Employee) {
    //     return this.profileService.getProject(employee.projectId)
    // }


    //tell federation gateway - how to request the profile
    @ResolveReference()
    resolvereference(ref: { __typename:string, id:string}){
        return this.profileService.findOne(ref.id);
    }
}
