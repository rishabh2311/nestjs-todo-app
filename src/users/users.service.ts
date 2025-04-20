import { Injectable } from '@nestjs/common';
import { User } from './users.entity'; // Import the User entity
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) // Inject the User repository
        private readonly usersRepository: Repository<User>, // Use the User repository
        ) {}
        
        async createUser(createUserDto: CreateUserDto): Promise<User> {
                const user = this.usersRepository.create(createUserDto);
                return this.usersRepository.save(user);
            }

        async deleteUser(id: string): Promise<void> {
            await this.usersRepository.delete(id);
        }
        async findUserById(id: string): Promise<User | null> {
            return this.usersRepository.findOneBy({ id });
        }

        async findAllUsers(): Promise<User[]> {
            return this.usersRepository.find();
        }

        async findUserByemail(email: string): Promise<User | null> {
            return this.usersRepository.findOneBy({ email });
        }
}
