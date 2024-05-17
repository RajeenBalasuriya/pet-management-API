import { ObjectType ,Field, Int} from "@nestjs/graphql";
import { Owner } from "src/owners/entities/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet{
    @PrimaryGeneratedColumn()
    @Field(type=>Int)
    id:number;

    @Column()
    @Field(type=>String)
    name:string;

    @Column({nullable:true})
    @Field(type=>String,{nullable:true})
    type?:string;

    @Column({nullable:true})
    @Field()
    gender:string;

    @Column({nullable:true})
    @Field(type=>Int)
    ownerId:number;

    @ManyToOne(()=>Owner,owner=>owner.pets)
    @Field(type=>Owner)
    owner:Owner

}