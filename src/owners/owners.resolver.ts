import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Telephone } from '../telephone/entities/telephone.entity';
import { TelephoneModule } from 'src/telephone/telephone.module';
import { TelephoneService } from '../telephone/telephone.service';

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService,private telephoneService:TelephoneService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownersService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'owners' })
  findAll() {
    return this.ownersService.findAll();
  }

  // @Query(() => Owner, { name: 'owner' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.ownersService.findOne(id);
  // }

  @ResolveField(() => Telephone)
  telephone(@Parent() owner: Owner): Promise<Telephone> {
    return this.ownersService.getTelephone(owner.telId);
  }


}
