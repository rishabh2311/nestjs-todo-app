import { Column, CreateDateColumn, 
    Entity, OneToMany, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

import { Todo } from "../todo/todo.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => Todo, (Todo) => Todo.user, { onDelete: 'CASCADE' })
    todoItems: Todo[];
}