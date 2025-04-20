import { Body, Controller, Param, Post, Get, Delete, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req: any) {
        return req.user;
    }
    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //     return this.userService.createUser(createUserDto);
    // }

    // @Get()
    // findAll():Promise<User[]> {
    //     return this.userService.findAllUsers();
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string): Promise<User | null> {
    //     return this.userService.findUserById(id);
    // }

    // @Get('email/:email')
    // findByEmail(@Param('email') email: string): Promise<User | null> {
    //     return this.userService.findUserByemail(email);
    // }

    // @Delete(':id')
    // delete(@Param('id') id: string): Promise<void> {
    //     return this.userService.deleteUser(id);
    // }
}
