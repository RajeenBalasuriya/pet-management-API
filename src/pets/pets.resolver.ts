import { Resolver ,Query, Mutation, Args, Int} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';



@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService:PetsService){}

    @Query(returns=>Pet)
    getPet(@Args ('id',{type:()=>Int}) id:number):Promise<Pet>{
        return this.petService.findOne(id);
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

