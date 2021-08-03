import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class MonitorCreateDTO {

    @Field()
    name: string
    @Field()
    profileId: string
    @Field()
    GardenId: string
    @Field()
    soilMoisture: number
    @Field()
    airTemperature: number
    @Field()
    fertilizerLevels: number

}