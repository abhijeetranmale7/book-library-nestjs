import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiParam } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    // @UseInterceptors(ClassSerializerInterceptor)
    // @ApiOkResponse({ type: UserDto })
    async create(
        @Body() createUserDto: CreateUserDto
    ): Promise<UserDto> {
        return new UserDto(
            await this.userService.create(
                createUserDto
            )
        )
    }
}