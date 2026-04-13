export const authService = {
    login: (username, password) => {
        const token = btoa(`${username}:${password}`);
        localStorage.setItem('devlog_auth', token);
        return true;
    },
    logout: () => {
        localStorage.removeItem('devlog_auth');
        window.location.href = '/login';
    },
    getAuthToken: () => {
        return localStorage.getItem('devlog_auth');
    },
    isAuthenticated: () => {
        return !!localStorage.getItem('devlog_auth');
    }
};
