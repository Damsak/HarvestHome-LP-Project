import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class MaintainUpdateDTO {

    @Field()
    plan: string
    @Field()
    removeWeeds: string
    @Field()
    activity: string
    @Field()
    waterlevel: number
    @Field()
    requiredTimeInMins: number

}