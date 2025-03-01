import { JWT_SECRET_KEY } from "../../domain/constants/SecretKey";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import jwt from "jsonwebtoken";

export class JWTRepository implements AuthRepository {
    validateToken(token: string): string {
        try {
            return "Not implemented"
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    createToken(data: any): string {
        try {
            
            const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: "1h"});

            return "Bearer " + token;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
}