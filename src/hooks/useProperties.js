import { useState, useEffect } from 'react';
import { propertyService } from '../services/propertyService';

export const useProperties = (initialFilters = {}) => {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState(initialFilters);

    useEffect(() => {
        const loadProperties = async () => {
            try {
                setIsLoading(true);
                const data = await propertyService.getProperties(filters);
                setProperties(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadProperties();
    }, [filters]);

    const updateFilters = (newFilters) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
    };

    return {
        properties,
        error,
        isLoading,
        filters,
        updateFilters,
    };
};
