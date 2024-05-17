import { Module } from '@nestjs/common';
import { TelephoneService } from './telephone.service';
import { TelephoneResolver } from './telephone.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telephone } from './entities/telephone.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Telephone])],
  providers: [TelephoneResolver, TelephoneService],
  exports:[TelephoneService]
})
export class TelephoneModule {}
