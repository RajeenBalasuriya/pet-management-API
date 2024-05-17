import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from '../../pets/pet.entity';
import { Telephone } from '../../telephone/entities/telephone.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Owner {

@PrimaryGeneratedColumn()
@Field((type)=>Int)
id:number;

@Column({nullable:true})
@Field(type=>Int)
telId:number;

@Column()
@Field()
name:string;




@OneToMany(()=>Pet,pet=>pet.owner)
@Field(type=>[Pet],{nullable:true})
pets?:Pet[];

@OneToOne(() => Telephone, { eager: true })
@JoinColumn({ name: 'telId' })
@Field((type) => Telephone, { nullable: true })
telephone?: Telephone;


  
}
