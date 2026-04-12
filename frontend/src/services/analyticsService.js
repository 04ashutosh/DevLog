import apiClient from "./apiClient";

export const analyticsService = {
    getStats: () => apiClient.get('/analytics'),
    downloadCsv: () => {
        window.open('http://localhost:8080/api/export/csv', '_blank');
    }
};