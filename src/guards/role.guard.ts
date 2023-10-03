import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflactor: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const requaredRoles = this.reflactor.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requaredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    const rolesFilter = requaredRoles.filter((role) => role === user.role);
    if (rolesFilter.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
