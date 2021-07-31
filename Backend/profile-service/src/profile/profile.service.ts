import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProfileCreateDTO } from './dto/create-profile.input';
import { ProfileUpdateDTO } from './dto/update-profile.input';
import { Profile } from './entity/profile.entity';

@Injectable()
export class ProfileService {

    profileToBeUpdate:any;

    constructor(@InjectRepository(Profile) private profileRepository:Repository<Profile>){

    }

    async findAll():Promise<Profile[]> {
        
       return this.profileRepository.find();
    }

    async findOne(id:string) {
        return this.profileRepository.findOne(id)
    }

    async create(profile: ProfileCreateDTO): Promise<Profile> {

        let prof = this.profileRepository.create(profile);
        return this.profileRepository.save(prof)

    }

    async update(id:string, profile:ProfileUpdateDTO) : Promise<any> {
        this.profileToBeUpdate = {
            "id":id,
            "firstName": profile.firstName,
            "lastName": profile.lastName,
            "location": profile.location,
            "goal": profile.goal,
        }
       return this.profileRepository.save(this.profileToBeUpdate);
    }

    async delete(id:string): Promise<DeleteResult> {
        return this.profileRepository.delete(id);
    }


}
