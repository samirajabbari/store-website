import axios from "axios";

const API = axios.create({ baseURL: "https://fakestoreapi.com" });

API.interceptors.response.use((response) => {
  return response.data;
});
export default API;
