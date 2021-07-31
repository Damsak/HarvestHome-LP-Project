import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class ProfileUpdateDTO {


    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    location: string
    @Field({ nullable: true })
    goal: string

}

