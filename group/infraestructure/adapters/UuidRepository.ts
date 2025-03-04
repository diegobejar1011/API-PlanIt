import { TokenRepository } from "../../domain/repositories/TokenRepository";
import { v4 as uuidv4 } from 'uuid';

export class UuidRepository implements TokenRepository {
    generateToken(): string {
        return uuidv4().replace(/-/g, '').substring(0, 8);
    }
    
}