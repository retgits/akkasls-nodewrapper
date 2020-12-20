/* eslint-disable @typescript-eslint/naming-convention */
export interface CurrentLogin {
    user: User;
    token: Token;
}

export interface Token {
    name: string;
    description?: string;
    created_time: Time;
    scopes: number[];
    expire_time?: Time;
    token_type?: number;
}

export interface Time {
    seconds: number;
}

export interface User {
    name: string;
    email: string;
    fullName: string;
    email_verified: boolean;
}