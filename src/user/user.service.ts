import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    public create(createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.prismaService.user.create({
            data: {
                id: createUserDto.id,
                name: createUserDto.name,
                age: createUserDto.age
            }
        })
    }
}