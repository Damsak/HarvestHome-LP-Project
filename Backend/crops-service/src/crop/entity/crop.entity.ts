import {  Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Crop {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    crop: string
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
    @Field()
    @Column()
    amount: number
    @Field()
    @Column()
    unitPrice: number

}