import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
@Injectable()
export class JwtGuard implements CanActivate {
  constructor() {}
  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();

    const token = request.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException('Please provide token');
    }
    try {
    
      const extractToken = token?.split(' ')[1];
      console.log(extractToken);
      const decoded = await jwt.verify(token,"ARBAJ");
      request.user = decoded;
      // Return true to allow access
      return true;
    } catch (err) {
      console.log(err);
      throw new ForbiddenException(err.message || 'session expired! Please sign In');
    }
  }
}
