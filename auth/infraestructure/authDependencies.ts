import { JWTRepository } from "./adapters/JWTRepository";

import { CreateTokenService } from "../application/CreateTokenService";

const jwtRepository = new JWTRepository();

export const createTokenService = new CreateTokenService(jwtRepository);