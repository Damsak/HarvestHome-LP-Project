import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MonitorModule } from './monitor/monitor.module';


@Module({
  imports: [MonitorModule, GraphQLFederationModule.forRoot(
    {
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    } 
      
    ), 
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'damsak',
      password:'root',
      database:'HarvestHomeDB',
      entities:["dist/**/*.entity{.ts,.js}"],
      synchronize:true, 
    }), 
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
