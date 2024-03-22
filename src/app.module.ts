import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
      ClientsModule.register([
            {
                name:"AUTHMICROSERVICES",
                transport:Transport.TCP,
                options:{
                      port:8002
                }
            }
      ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
