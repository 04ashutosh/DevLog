import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

//Helps debug errors in the browser console
apiClient.interceptors.response.use(
    response => response,
    error =>{
        console.error('API Error:',error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;