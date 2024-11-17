const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
    async get(endpoint, queryParams = {}) {
        try {
            const queryString = new URLSearchParams(queryParams).toString();
            const url = `${API_BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`API call failed: ${error.message}`);
        }
    },
};
