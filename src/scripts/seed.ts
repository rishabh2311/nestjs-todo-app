import datasource from '../database/datasource';
import { User } from '../users/users.entity';
import { Todo } from '../todo/todo.entity';
import * as bcrypt from 'bcrypt';

async function seed() {
  const dataSource = await datasource.initialize();

  // Clear existing data
  await dataSource.query('TRUNCATE TABLE "todo_items", "users" RESTART IDENTITY CASCADE');

  // Hash password
  const passwordHash = await bcrypt.hash('password', 10);

  // Create test users
  const userRepo = dataSource.getRepository(User);
  const user1 = userRepo.create({
    email: 'test1@example.com',
    password: passwordHash,
    username: 'TestUser1',
  });
  const user2 = userRepo.create({
    email: 'test2@example.com',
    password: passwordHash,
    username: 'TestUser2',
  });
  await userRepo.save([user1, user2]);

  // Create test todos
  const todoRepo = dataSource.getRepository(Todo);
  const todos = todoRepo.create([
    {
      content: 'Buy groceries',
      isCompleted: false,
      dueDate: new Date(),
      user: user1,
    },
    {
      content: 'Clean room',
      isCompleted: true,
      dueDate: new Date(),
      user: user1,
    },
    {
      content: 'Read a book',
      isCompleted: false,
      dueDate: new Date(),
      user: user2,
    },
  ]);
  await todoRepo.save(todos);

  console.log('✅ Seed complete.');
  await dataSource.destroy();
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
});
