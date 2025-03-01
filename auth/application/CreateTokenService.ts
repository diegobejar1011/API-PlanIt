import { AuthRepository } from "../domain/repositories/AuthRepository";

export class CreateTokenService{
    constructor(private readonly authRepository: AuthRepository) {}
    run(data: any){
        try {
            const token = this.authRepository.createToken(data);

            return token;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}