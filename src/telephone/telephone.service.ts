import { Injectable } from '@nestjs/common';
import { CreateTelephoneInput } from './dto/create-telephone.input';
import { UpdateTelephoneInput } from './dto/update-telephone.input';
import { Repository } from 'typeorm';
import { Telephone } from './entities/telephone.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TelephoneService {

  constructor(@InjectRepository(Telephone) private telephoneRepository:Repository<Telephone>){};

  create(createTelephoneInput: CreateTelephoneInput ) {
    const newTel=this.telephoneRepository.create(createTelephoneInput);
        return this.telephoneRepository.save(newTel);
  }

  findAll() {
    return `This action returns all telephone`;
  }

  findOne(id: number) {
    return this.telephoneRepository.findOne({where:{id:id}})
  }


}
