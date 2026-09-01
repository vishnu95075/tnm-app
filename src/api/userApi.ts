import api from "./axios";
import type { MassageResponse, UserRequest, UserResponse } from "../types/user.types";

export const createUser = async (
  user: UserRequest
): Promise<UserResponse> => {
  const response = await api.post<UserResponse>("/user", user);
  return response.data;
};

export const getUsers = async (): Promise<UserResponse[]> => {
  const response = await api.get<UserResponse[]>("/user/user");
  return response.data;
};


export const getUserProfileByToken = async (token: string): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`user/user/profile/token/${token}`);
  return response.data;
};

export const getUserProfileByUserName = async (username: string): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`user/user/profile/${username}`);
  return response.data;
};

export const uploadAvatar = async (username: string, file: File): Promise<MassageResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.patch<MassageResponse>(       
    `/user/user/avatar/${username}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }

  );
  return response.data;
}