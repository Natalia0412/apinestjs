import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(body: CreateUserDTO) {
    return await this.prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
  }
}
