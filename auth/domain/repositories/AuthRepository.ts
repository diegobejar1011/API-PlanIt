import { UserRes } from "../../../user/domain/entities";

export interface AuthRepository{
    createToken(data: UserRes): string;
    validateToken(token: string): string;
}
