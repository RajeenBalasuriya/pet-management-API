import { Resolver ,Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';



@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService:PetsService,private ownerService:OwnersService){}

    @Query(returns=>Pet)
    getPet(@Args ('id',{type:()=>Int}) id:number):Promise<Pet>{
        return this.petService.findOne(id);
    }

    @ResolveField(returns =>Owner)
    owner(@Parent() pet:Pet):Promise<Owner>{
        return this.petService.getOwner(pet.ownerId);
    }
 

    @Query(returns => [Pet])
    pets():Promise<Pet[]>{
            return this.petService.findAll();
    }

    @Mutation(returns =>Pet)
    createPet(@Args('createPetInput') createPetInput:CreatePetInput):Promise<Pet>{
        return this.petService.createPet(createPetInput);

    }
}

