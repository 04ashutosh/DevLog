import apiClient from "./apiClient";

export const analyticsService = {
    getStats: () => apiClient.get('/analytics'),
    downloadCsv: () => {
        window.open('http://localhost:9000/api/export/csv', '_blank');
    }
};