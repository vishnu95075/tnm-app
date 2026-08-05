export interface RegisterAuthRequest {
    username: string;
    email:string;
    password: string;
}
export interface LogInAuthRequest {
    username: string;
    password: string;
}

export interface AuthTokenResponse {
    token: string;
}

export interface AuthTokenReponse {
    token: string;
}