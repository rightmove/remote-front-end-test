import { api } from './api';

export const propertyService = {
    async getProperties(filters = {}) {
        return api.get('/properties', filters);
    },
};
