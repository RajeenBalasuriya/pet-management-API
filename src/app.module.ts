import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'rajeen123',
    username: 'postgres',
    entities: ['dist/**/*.entity{.ts,.js}'],
    database: 'pet-database',
    synchronize: true,
    logging: true,
  }),GraphQLModule.forRoot({
    autoSchemaFile:join(process.cwd(),'src/schema.gql'),
    driver: ApolloDriver,
  }),PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
