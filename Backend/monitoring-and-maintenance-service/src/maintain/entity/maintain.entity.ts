import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Maintain {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    plan: string
    @Field()
    @Column()
    removeWeeds: string
    @Field()
    @Column()
    activity: string
    @Field()
    @Column()
    waterlevel: number
    @Field()
    @Column()
    requiredTimeInMins: number

}