import { Body, Controller, Param, 
    Post, Get, Delete, Patch, UseGuards, Request } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    create(@Body() createTodoDto: CreateTodoDto, @Request() req: any){
        return this.todoService.createTodo(createTodoDto, req.user);
    }

    @Get()
    findAll(@Request() req: any){
        return this.todoService.findAllTodos(req.user);
    } 

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Request() req: any,
        @Body() updateTodoDto: UpdateTodoDto,
    ) {
        return this.todoService.updateTodo(id, updateTodoDto, req.user);
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Request() req: any) {
        return this.todoService.delete(id, req.user);
    }
}
