import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { hashSync } from '@/utils/hash';
import { jsonValReplace } from '@/utils/string';

import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  exclude(users: any, keys: Array<string>): Promise<User> {
    users.forEach((user: any) => {
      keys.forEach((key) => delete user[key]);
    });
    return users;
  }

  async user(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where: where });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({ skip, take, cursor, where, orderBy });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const hash = hashSync(data.password);
    const newData = jsonValReplace('password', hash, data);
    return this.prisma.user.create({ data: newData });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({ data, where });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}
