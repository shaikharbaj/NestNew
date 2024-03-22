import {Controller,Get, Post,Body} from '@nestjs/common'
import { CreateUserDTO } from './create-user-dto'
import { AppService } from './app.service';


@Controller()
export class AppController{
        constructor(private readonly appService:AppService){}

        @Get()
          getHello():string{
                return 
          }
        
          @Post("/login")
          createUser(@Body() createUserRequest: CreateUserDTO) {
            return this.appService.createUser(createUserRequest);
          }
}