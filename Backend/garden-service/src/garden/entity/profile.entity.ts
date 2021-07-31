import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Garden } from "./garden.entity";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields:"id")')
export class Profile {


    @Field((type) => ID)
    @Directive('@external')
    id:string

    //profile should carry garden array. profile can have many gardens
    @Field((type)=>[Garden])
    gardens: Garden[]

}