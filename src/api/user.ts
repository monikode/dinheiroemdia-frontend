import { axiosInstance } from "./axios";

export interface User {
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
}

export interface LoginResponseUser {
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
  id: string;
}

export interface LoginResponse {
  result: { access_token: string };
  user: LoginResponseUser;
  message: string;
}
export const userOperations = {
  getByToken: () => axiosInstance.get<LoginResponseUser>(`/users/find-by-token`),
  create: (user: User, password: string) =>
    axiosInstance.post(`/users/register/`, { ...user, password }),
  login: (email: string, password: string) =>
    axiosInstance.post<LoginResponse>(`/users/login/`, { email, password }),
  updateData: (name: string, lastName: string, birthday: Date) =>
    axiosInstance.patch(`/users/update-data`, { name, lastName, birthday }),
  updatePassword: (password: string, newPassword: string) =>
    axiosInstance.patch(`/users/update-password`, { password, newPassword }),
};
