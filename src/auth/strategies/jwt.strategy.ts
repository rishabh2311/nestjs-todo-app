import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../jwt-payload.interface'; // Import the JwtPayload interface
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor( private readonly authService: AuthService){
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Extract JWT from Bearer token in request header
        secretOrKey: process.env.JWT_SECRET || 'defaultSecretKey',  // Use the same secret as used during JWT creation
        });
    }

    async validate(payload: JwtPayload){
        return { id: payload.sub, email: payload.email }; // Return the user data if validation is successful
    }
}
