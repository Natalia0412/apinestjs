import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { updatePutUserDTO } from './dto/update-user.dto';
import { updatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from './interceptors/log.interceptor';
import { ParamId } from '../decorators/param-id.decorator';
import { Roles } from '../decorators/role.decorator';
import { Role } from '../enums/role.enum';
import { RoleGuard } from '../guards/role.guard';

@UseGuards(RoleGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Roles(Role.Admin)
  @UseInterceptors(LogInterceptor)
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Roles(Role.Admin)
  @UseInterceptors(LogInterceptor)
  @Get()
  async list() {
    return this.userService.list();
  }

  @Roles(Role.Admin)
  @Get('/:id')
  async show(@ParamId() id: number) {
    return this.userService.show(id);
  }

  @Roles(Role.Admin)
  @Put('/:id')
  async udpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updatePutUserDTO,
  ) {
    return this.userService.update(id, body);
  }

  @Roles(Role.Admin)
  @Patch('/:id')
  async updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updatePatchUserDTO,
  ) {
    return this.userService.updatePartial(id, body);
  }

  @Roles(Role.Admin)
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
