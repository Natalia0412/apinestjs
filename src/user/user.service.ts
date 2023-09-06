import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { updatePutUserDTO } from './dto/update-user.dto';
import { updatePatchUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(body: CreateUserDTO) {
    return await this.prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
        birthat: body.birthat ? new Date(body.birthat) : null,
      },
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    await this.exists(id);
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    { name, email, password, birthat, role }: updatePutUserDTO,
  ) {
    await this.exists(id);

    return this.prisma.user.update({
      where: {
        id,
      },

      data: {
        name,
        email,
        password,
        birthat: birthat ? new Date(birthat) : null,
        role,
      },
    });
  }

  async updatePartial(
    id: number,
    { name, email, password, birthat, role }: updatePatchUserDTO,
  ) {
    await this.exists(id);

    const data: any = {};
    if (birthat) {
      data.birthat = new Date(birthat);
    }

    if (email) {
      data.email = email;
    }

    if (password) {
      data.password = password;
    }

    if (name) {
      data.name = name;
    }

    if (role) {
      data.role = role;
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number) {
    await this.exists(id);

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async exists(id: number) {
    if (
      !(await this.prisma.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuario com id ${id} não existe`);
    }
  }
}
