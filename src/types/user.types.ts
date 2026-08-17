
export interface UserRequest {
    username: string;
    password: string;
}
export interface UserResponse {
    authId: string;
    email: string;
    username: string;
    fullName: string;
    bio: string;
    dob:Date;
    profilePicUrl: string;
}

export interface MassageResponse{
    massage:string;
}