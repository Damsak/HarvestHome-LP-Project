import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class GardenCreateDTO {

    @Field()
    owner: string
    @Field()
    crops: string
    @Field()
    location: string
    @Field()
    profileId: string

}