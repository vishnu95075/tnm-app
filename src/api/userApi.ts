import api from "./axios";
import type { UserRequest, UserResponse } from "../types/user.types";

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

export const getUserProfileByUserName = async (userName: string): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`user/user/profile/${userName}`);
  return response.data;
};