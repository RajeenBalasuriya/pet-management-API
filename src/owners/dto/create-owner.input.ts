import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {



  
  @Field(type=>String)
  name:string;

  @Field(type=>Int)
  telId:number

  

  
}
