import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.entity';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (private readonly usersService: UsersService
        , private readonly jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUserByemail(email);
        if (user && await bcrypt.compare(password, user.password)){
            return user;
        }
        return null;
    }

    async register(createUserDto: CreateUserDto): Promise<void> {
        const { email, password } = createUserDto;

        const userExists = await this.usersService.findUserByemail(email);
        if (userExists) {
            throw new UnauthorizedException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { ...createUserDto, password: hashedPassword };
        await this.usersService.createUser(newUser);

        return this.login(newUser);
    }

    async login(user: any): Promise <any> {
        const payload: JwtPayload = {email: user.email, sub: user.id};
        const accessToken = this.jwtService.sign(payload);
        
        return { access_token: accessToken };
    }

}
