"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTokenService = void 0;
class CreateTokenService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    run(data) {
        try {
            const token = this.authRepository.createToken(data);
            return token;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.CreateTokenService = CreateTokenService;
