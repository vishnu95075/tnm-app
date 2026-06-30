
export interface UserRequest {
    username: string;
    password: string;
}
export interface UserResponse {
    userId: string;
    email: string;
    username: string;
    fullName: string;
    bio: string;
    profilePicUrl: string;
}

export interface UserToken {
    token: string;
}