import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class GardenUpdateDTO {


    // @Field()
    // id:string
    @Field()
    owner: string
    @Field()
    crops: string
    @Field()
    location: string
    @Field()
    profileId: string

}