import { Injectable } from '@nestjs/common';
import {Pet} from './pet.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {

    constructor(@InjectRepository(Pet) private petsRepository:Repository<Pet>){}

    createPet(createPetInput:CreatePetInput):Promise<Pet>{
        const newpet=this.petsRepository.create(createPetInput);
        return this.petsRepository.save(newpet);
    }

   async findAll():Promise<Pet[]>{
        return this.petsRepository.find();
    }
   
    findOne(id:number):Promise<Pet>{
        return this.petsRepository.findOne({where:{id:id}})
    }
}
