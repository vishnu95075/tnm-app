import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090", // Your Spring Boot API URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;