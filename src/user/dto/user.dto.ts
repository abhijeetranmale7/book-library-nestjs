import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UserDto {
    constructor(partial: Partial<UserDto>) {
        Object.assign(this, partial)
    }

    @ApiProperty()
    @IsNotEmpty()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    age: number
}