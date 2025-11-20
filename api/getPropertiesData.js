const PROPERTIES_URL = 'http://localhost:3000/api/properties';

export const getPropertiesData = async () => {
    try {
        const response = await fetch(PROPERTIES_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching properties:`, error);
        throw error;
    }
};
