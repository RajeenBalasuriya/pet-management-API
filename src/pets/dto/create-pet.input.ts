import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createPet{
    @Field()
    name:string;
    @Field({nullable:true})
    type?:string;
}