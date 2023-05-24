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
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { updatePutUserDTO } from './dto/update-user.dto';
import { updatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Get()
  async list() {
    return { list: [] };
  }

  @Get('/:id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

  @Put('/:id')
  async udpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updatePutUserDTO,
  ) {
    return { id, body };
  }

  @Patch('/:id')
  async updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updatePatchUserDTO,
  ) {
    return { id, body };
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
