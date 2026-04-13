import axios from "axios";
import { authService } from "./authService";

const apiClient = axios.create({
    baseURL: 'http://localhost:9000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach Authorization header to every request
apiClient.interceptors.request.use(config => {
    const token = authService.getAuthToken();
    if (token) {
        config.headers.Authorization = `Basic ${token}`;
    }
    return config;
});

// Debug errors — do not auto-logout, let pages handle it gracefully
apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response?.status, error.response?.data || error.message);
        return Promise.reject(error);
    }
);


export default apiClient;