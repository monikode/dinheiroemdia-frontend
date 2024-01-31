import { axiosInstance } from "./axios";
import { SpentResponse } from "./spent";

export interface Account {
  id: number;
  name: string;
  color: string;
  icon: string;
  value: number;
  type: string;
  consumption?: number;
  percentage?: number;
}

export const accountOperations = {
  get: (id: number) => axiosInstance.get(`/account/${id}`),
  list: () => axiosInstance.get<Account[]>(`/account/statistic`),
  listSpents: (id: number) =>
  axiosInstance.get<SpentResponse[]>(`/account/find-one/${id}`),
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
