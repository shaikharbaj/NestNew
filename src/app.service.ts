import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./create-user-dto";
import { ClientProxy } from "@nestjs/microservices";
@Injectable()
export class AppService{
      private readonly users:any[]=[];

      constructor(
        @Inject('AUTHMICROSERVICES') private readonly authClient: ClientProxy
      ){}
        createUser(createuserdto:CreateUserDTO){
            return this.authClient.send({ role: 'item', cmd: 'create' }, createuserdto);
        }
}