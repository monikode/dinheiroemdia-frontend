import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-develop-lu2msizp5a-uc.a.run.app/",
});

axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("dd-token");

axiosInstance.defaults.headers.common.Authorization =
  "Bearer " + localStorage.getItem("dd-token");

export { axiosInstance };
