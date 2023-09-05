import {
  ExecutionContext,
  NotFoundException,
  createParamDecorator,
} from '@nestjs/common';

export const User = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      if (filter) {
        return request.user[filter];
      } else {
        return request.user;
      }
    } else {
      throw new NotFoundException(
        'Usuario não encontrado no Request, use o AuthGuard para obter o usuario',
      );
    }
  },
);
