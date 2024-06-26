import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { TelephoneModule } from '../telephone/telephone.module';

@Module({
  imports:[TypeOrmModule.forFeature([Owner]),TelephoneModule],
  providers: [OwnersResolver, OwnersService],
  exports:[OwnersService]
})
export class OwnersModule {}
