import { useCallback, useState } from 'react';

const API_BASE_URL = 'http://localhost:3000';

export const useFetchProperties = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    const fetchProperties = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/properties`, { method: 'GET' });
            const data = await response.json();
            setProperties(data);
        } catch (err) {
            setProperties([]);
            console.error('An error occured whilst fetching the properties', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        properties,
        fetchProperties,
    };
};
