import { IsString, IsNotEmpty, IsOptional } from 'class-validator';


export class UpdateTodoDto {
    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsOptional()
    isComplete?: boolean;

    @IsOptional()
    dueDate?: Date;
}