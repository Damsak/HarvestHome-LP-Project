import { Directive, Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Directive('@key(fields:"id")') //tell federation gateway to give profile by passing id 
@Entity()
export class Profile {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    firstName:string
    @Field()
    @Column()
    lastName:string
    @Field()
    @Column()
    location:string
    @Field({nullable:true})
    @Column({nullable:true})
    goal:string



}