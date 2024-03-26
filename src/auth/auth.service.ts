import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as bcrypt from 'bcryptjs';
import { registerUserDTO } from './DTO/registeruserdto';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from './DTO/loginUserDTO';
@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}

  async checkworkingornot() {
    return this.authClient.send({ role: 'register', cmd: 'register' }, {});
  }

  async generateToken(options: any): Promise<string> {
    return;
  }

  async validateToken(token: string): Promise<any> {
    try {
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  async register(user: registerUserDTO): Promise<any> {
    return this.authClient.send(
      { role: 'registeruser', cmd: 'register_user' },
      user,
    );
  }

  async login(user:LoginUserDTO):Promise<any>{
       return this.authClient.send({role:"loginuser",cmd:"login_user"},user)
  }
}
