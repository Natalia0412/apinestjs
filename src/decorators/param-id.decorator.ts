import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return Number(context.switchToHttp().getRequest().params.id);
  },
);
