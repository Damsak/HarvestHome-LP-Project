import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CropUpdateDTO {

    @Field()
    crop: string
    @Field()
    GardenId: string
    @Field()
    soilMoisture: number
    @Field()
    airTemperature: number
    @Field()
    fertilizerLevels: number

}