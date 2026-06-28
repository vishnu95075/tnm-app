import api from "./axios";
import type { UserRequest, UserResponse } from "../types/user";

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