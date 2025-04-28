import { API_BASE_URL } from '../constants';

export const fetchProperties = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/properties`);
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
    }
};