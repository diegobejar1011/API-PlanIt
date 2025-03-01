import { EncryptRepository } from "../../domain/repositories/EncryptRepository";
import bcrypt from "bcrypt"

export class BcryptRepository implements EncryptRepository{
    async encodePassword(plantextPassword: string): Promise<string> {
        try {
            const hashPassword = await bcrypt.hash(plantextPassword, 10);

            return hashPassword;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async decodePasword(plantextPassword: string, encryptPassword: string): Promise<boolean> {
        try {
            const verified = await bcrypt.compare(plantextPassword, encryptPassword);

            return verified;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
}