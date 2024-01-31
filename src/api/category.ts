import { axiosInstance } from "./axios";
import { SpentResponse } from "./spent";

export interface Category {
  id: number;
  name: string;
  color: string;
  icon: string;
  consumption?: number;
  percentage?: number;
}

export const categoryOperations = {
  get: (id: number) => axiosInstance.get(`/category/${id}`),
  list: () => axiosInstance.get<Category[]>(`/category/statistic`),
  listSpents: (id: number) =>
    axiosInstance.get<SpentResponse[]>(`/category/find-one/${id}`),
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
