import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { dataSourceOptions } from './database/typeorm.config'; // Import your TypeORM configuration
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
TypeOrmModule.forRoot(dataSourceOptions),
UsersModule,
TodoModule,
AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
