import { Column, Entity,
    CreateDateColumn, PrimaryGeneratedColumn, 
    ManyToMany,
    ManyToOne} from "typeorm";
import { User } from "../users/users.entity";

@Entity('todo_items')
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    content: string;

    @Column({ default: false, name: 'is_completed' })
    isCompleted: boolean;

    @Column({ type: 'timestamp', name: 'due_date', nullable: true })
    dueDate?: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.todoItems, { onDelete: 'CASCADE' })
    user: User;

}