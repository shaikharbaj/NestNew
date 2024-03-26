import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../DTO/registeruserdto';
import { ROLES_KEYS } from '../DTO/roles.decorator';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector:Reflector) {
        
  }

  
  async canActivate(context: ExecutionContext): Promise<boolean> {

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
           ROLES_KEYS,[
               context.getHandler(),
               context.getClass()
           ]
    )
    if(!requiredRoles){
          return true
    }
    // const { user } = context.switchToHttp().getRequest();
    const result = requiredRoles.some((role)=>role==='USER')
    return result;
  }
}
