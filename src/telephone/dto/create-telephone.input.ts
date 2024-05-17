import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTelephoneInput {
 
  @Field(type=>Int)
  telNo:number;
}
