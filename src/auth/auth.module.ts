import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { RoleGuard } from './guard/roleguard';
import { JwtGuard } from './guard/jwt.guard';



@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          port: Number(8002),
        },
      },
    ])
  ],
  // imports:[

  // ],
  controllers: [AuthController],
  providers: [AuthService,JwtService,RoleGuard,JwtGuard],
  exports: [],
})

export class AuthModule {
     
}
