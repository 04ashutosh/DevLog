import apiClient from "./apiClient";

export const logService = {
    getAll: () => apiClient.get('/logs'),
    create: (data) => apiClient.post('/logs',data),
};