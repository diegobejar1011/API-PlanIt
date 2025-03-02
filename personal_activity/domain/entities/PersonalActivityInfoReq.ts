export interface PersonalActivityInfoReq {
    user_id: number;
    title: string;
    category_id: number;
    status: string;
    description: string;
    date: Date;
}