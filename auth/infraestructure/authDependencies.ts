import { CreateTokenService, VerifyTokenService } from "../application";
import { JWTRepository } from "./adapters/JWTRepository";

const jwtRepository = new JWTRepository();

export const createTokenService = new CreateTokenService(jwtRepository);
export const verifyTokenService = new VerifyTokenService(jwtRepository);