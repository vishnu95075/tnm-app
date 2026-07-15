import type { AuthRequest, AuthResponse } from "../types/auth.types";
import api from "./axios";

export const logInUser = async (
  user: AuthRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/api/login", user);
  return response.data;
};