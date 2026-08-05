import type { LogInAuthRequest, AuthTokenResponse, RegisterAuthRequest } from "../types/auth.types";
import api from "./axios";

export const logInUser = async (
  user: LogInAuthRequest
): Promise<AuthTokenResponse> => {
  const response = await api.post<AuthTokenResponse>("/auth/api/login", user);
  return response.data;
};

export const registerUser = async (
  user: RegisterAuthRequest
): Promise<AuthTokenResponse> => {
  const response = await api.post<AuthTokenResponse>("/auth/api/register", user);
  return response.data;
};