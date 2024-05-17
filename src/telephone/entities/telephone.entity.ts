import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Telephone {
  @PrimaryGeneratedColumn()
  @Field(type=>Int)
  id:number;

  @Column()
  @Field(type=>Int)
  telNo:number;

  @OneToOne(()=>Owner,owner=>owner.telephone)
  @Field(type=>Owner)
  owner:Owner
}
