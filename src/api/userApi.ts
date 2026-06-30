import api from "./axios";
import type { UserRequest, UserResponse, UserToken } from "../types/user";

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


export const logInUser = async (
  user: UserRequest
): Promise<UserToken> => {
  const response = await api.post<UserToken>("/auth/api/login", user);
  return response.data;
};