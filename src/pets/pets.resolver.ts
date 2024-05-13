import { Resolver ,Query} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';


@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService:PetsService){}

    @Query(returns => [Pet])
    pets():Promise<Pet[]>{
            return this.petService.findAll();
    }
}
