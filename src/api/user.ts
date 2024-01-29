
import { axiosInstance } from "./axios";

export interface User {
    name: string;
    lastName: string;
    email: string;
    birthday: Date;

}

export const userOperations = {
    get: () =>
        axiosInstance.gets(`/users`),
    getOne: (id: number) => axiosInstance.get(`/users/${id}`),
    create: (user: User, password: string) => 
        axiosInstance.post(`/users/register/`, { ...user, password })
  ,
    login: (email:string, password :string) =>
        axiosInstance.post(`/users/login/`, {email, password}),
    //   update: (id: number, data: UserPermission) =>
    //     axiosInstance.patch(`/users/${id}`, data),

};
