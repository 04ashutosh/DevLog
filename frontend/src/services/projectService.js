import apiClient from "./apiClient";

export const projectService = {
    getAll: () => apiClient.get('/projects'),
    create: (data)=> apiClient.post('/projects',data),
};