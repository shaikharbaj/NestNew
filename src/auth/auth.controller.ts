import { Body, Controller,Get,Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role, registerUserDTO } from './DTO/registeruserdto';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from './DTO/loginUserDTO';
import { JwtGuard } from './guard/jwt.guard';
import { Roles } from './DTO/roles.decorator';
import { RoleGuard } from './guard/roleguard';



@Controller('auth')
export class AuthController {
   
    constructor(private readonly authService:AuthService){}

    // @UseGuards(JwtGuard)
    @Roles(Role.ADMIN,Role.USER)
    @UseGuards(RoleGuard)
    @Get()
    async checkItWorkOrNot(){
          return await this.authService.checkworkingornot();
    }

    @Post("register")
    async register(@Body() body:registerUserDTO):Promise<any>{
           return this.authService.register(body);
    }
    @Post("login")
    async login(@Body() body:LoginUserDTO):Promise<any>{
             console.log(body);
            return this.authService.login(body);
    }



}
