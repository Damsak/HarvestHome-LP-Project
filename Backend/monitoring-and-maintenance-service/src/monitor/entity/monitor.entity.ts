import { Directive, Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Monitor {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    name: string
    @Field()
    @Column()
    profileId: string
    @Field()
    @Column()
    GardenId: string
    @Field()
    @Column()
    soilMoisture: number
    @Field()
    @Column()
    airTemperature: number
    @Field()
    @Column()
    fertilizerLevels: number


}