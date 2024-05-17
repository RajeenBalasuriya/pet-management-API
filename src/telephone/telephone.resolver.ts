import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TelephoneService } from './telephone.service';
import { Telephone } from './entities/telephone.entity';
import { CreateTelephoneInput } from './dto/create-telephone.input';
import { UpdateTelephoneInput } from './dto/update-telephone.input';

@Resolver(() => Telephone)
export class TelephoneResolver {
  constructor(private readonly telephoneService: TelephoneService) {}

  @Mutation(() => Telephone)
  createTelephone(@Args('createTelephoneInput') createTelephoneInput: CreateTelephoneInput) {
    return this.telephoneService.create(createTelephoneInput);
  }

  @Query(() => [Telephone], { name: 'telephone' })
  findAll() {
    return this.telephoneService.findAll();
  }

  // @Query(() => Telephone, { name: 'telephone' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.telephoneService.findOne(id);
  // }


}
