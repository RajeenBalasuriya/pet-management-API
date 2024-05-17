import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { Telephone } from '../telephone/entities/telephone.entity';
import { TelephoneService } from '../telephone/telephone.service';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private ownersRepository:Repository<Owner>,private telephoneService:TelephoneService){}

  create(createOwnerInput: CreateOwnerInput) {

    const newOwner= this.ownersRepository.create(createOwnerInput)
    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    return `This action returns all owners`;
  }

  async findOne(id: number): Promise<Owner> {
    return await this.ownersRepository.findOne({ where: { id }, relations: ['telephone'] });
  }

  async getTelephone(id: number) {
    return await this.telephoneService.findOne(id);
  }

}
