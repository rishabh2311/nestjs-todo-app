import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsOptional()
    isComplete: boolean;

    @IsOptional()
    dueDate: Date;
}