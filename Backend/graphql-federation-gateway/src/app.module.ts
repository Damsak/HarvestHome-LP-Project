import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';


@Module({
  imports: [GraphQLGatewayModule.forRoot({
    server:{
      cors:true
    },
    gateway:{
      serviceList:[
        {name:"gardens", url:"http://localhost:3010/graphql"},
        {name:"profiles", url:"http://localhost:3011/graphql"},
        {name:"monitors", url:"http://localhost:3012/graphql"},
        {name:"crops", url:"http://localhost:3013/graphql"}
    ]
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
