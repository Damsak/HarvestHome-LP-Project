import { Directive, Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Profile } from "./profile.entity"

@ObjectType()
@Directive('@key(fields:"id")') //if gateway need garden type object
@Entity()
export class Garden {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    owner:string
    @Field()
    @Column()
    crops:string
    @Field()
    @Column()
    location:string

    @Field(() => Profile)
    profile: Profile

    @Column()
    @Field()
    profileId: string


}