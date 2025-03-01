export interface EncryptRepository {
    encodePassword(plantextPassword: string): Promise<string>;
    decodePasword(plantextPassword: string, encryptPassword: string): Promise<boolean>;
}