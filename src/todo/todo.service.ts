import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity'; // Import the TodoItem entity
import { Repository } from 'typeorm';   
import { InjectRepository } from '@nestjs/typeorm'; // Import the InjectRepository decorator
import { CreateTodoDto } from './dto/create-todo.dto'; // Import the CreateTodoDto
import { UpdateTodoDto } from './dto/update-todo.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) // Inject the TodoItem repository
        private readonly todoRepository: Repository<Todo>, // Use the TodoItem repository
    ) {}

    async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo> {
        const todoItem = this.todoRepository.create({...createTodoDto, user}); // Create a new TodoItem instance
        return this.todoRepository.save(todoItem); // Save the new TodoItem to the database
    }

    async findAllTodos(user: User): Promise<Todo[]> {
        return this.todoRepository.find({
            where: { user: { id: user.id } }, // Find all TodoItems for the given user
            order: {createdAt: 'DESC'}, // Order by created_at in descending order
    }); // Find all TodoItems in the database
    }
    
    async updateTodo (id: string, updateTodoDto: UpdateTodoDto, user: User): Promise<Todo> {
        const todoItem = await this.todoRepository.findOne({ 
            where: { id, user: {id: user.id} }, // Find the TodoItem by ID and user ID
         });
        if (!todoItem) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        Object.assign(todoItem, updateTodoDto); // Update the TodoItem with the new data
        return this.todoRepository.save(todoItem); // Save the updated TodoItem to the database
    }
    
    async delete (id: string, user: User): Promise<void> {
        const todoItem = await this.todoRepository.findOne({ 
            where: { id, user: {id: user.id} }, // Find the TodoItem by ID and user ID
         });
        if (!todoItem) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        await this.todoRepository.remove(todoItem); // Remove the TodoItem from the database
    }
}
