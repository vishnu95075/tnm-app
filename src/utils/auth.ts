import api from "../api/axios";

export const isAuthenticated = (): boolean => {
    return localStorage.getItem("token") !== null;
};

api.interceptors.request.use(
  (config) => {
    // Retrieve token from local storage or state
    const token = localStorage.getItem('token'); 
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
