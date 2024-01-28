import { axiosInstance } from "./axios";

export interface Category {
  id: number;
  name: string;
  color: string;
  icon: string;
}

export const categoryOperations = {
  get: (id: number) => axiosInstance.get(`/category/${id}`),
  list: () => axiosInstance.get<Category[]>(`/category`),
  create: (name: string, color: string, icon: string) =>
    axiosInstance.post(`/category/`, {
      name,
      color,
      icon,
    }),

  update: (id: number, name: string, color: string, icon: string) =>
    axiosInstance.patch(`/category/${id}`, { 
      name,
      color,
      icon,
    }),
  delete: (id: number) => axiosInstance.delete(`/category/${id}`),
};
