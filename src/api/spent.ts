import { axiosInstance } from "./axios";

export interface Spent {
  id: number;
  description: string;
  value: number;
  accountId: number;
  categoryId: number;
}

export interface SpentResponse {
    id: number;
    description: string;
    value: number;
    createdAt:Date;
    account: {id:number; name:string};
    category: {id:number; name:string};
  }
  

export const spentOperations = {
  //   get: (id: number) => axiosInstance.get(`/account/${id}`),
  //   list: () => axiosInstance.get<Account[]>(`/account`),
  create: (
    description: string,
    value: number,
    accountId: number,
    categoryId: number
  ) =>
    axiosInstance.post(`/spent/`, {
      description,
      value,
      accountId,
      categoryId,
    }),

  //   update: (id: number, name: string, color: string, icon: string, value:number, type:string) =>
  //     axiosInstance.patch(`/account/${id}`, {
  //       name,
  //       color,
  //       icon,
  //       value,
  //       type,
  //     }),
  //   delete: (id: number) => axiosInstance.delete(`/account/${id}`),
};
