import { axiosInstance } from "./axios";

export interface Account {
  id: number;
  name: string;
  color: string;
  icon: string;
  value: number;
  type: string;
}

export const accountOperations = {
  get: (id: number) => axiosInstance.get(`/account/${id}`),
  list: () => axiosInstance.get<Account[]>(`/account`),
  create: (name: string, color: string, icon: string, value:number, type:string) =>
    axiosInstance.post(`/account/`, {
      name,
      color,
      icon,
      value, 
      type,
    }),

  update: (id: number, name: string, color: string, icon: string, value:number, type:string) =>
    axiosInstance.patch(`/account/${id}`, {
      name,
      color,
      icon,
      value, 
      type,
    }),
  delete: (id: number) => axiosInstance.delete(`/account/${id}`),
};
