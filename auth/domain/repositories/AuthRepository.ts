export interface AuthRepository{
    createToken(data: any): string;
    validateToken(token: string): string;
}
