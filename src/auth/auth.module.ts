import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JWTStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [UsersModule, PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'defaultSecretKey',
            signOptions: { expiresIn: '1h' }, // Token expiration time
        })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JWTStrategy],
})
export class AuthModule {}
