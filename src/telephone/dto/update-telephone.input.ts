import { CreateTelephoneInput } from './create-telephone.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTelephoneInput extends PartialType(CreateTelephoneInput) {
  @Field(() => Int)
  id: number;
}
