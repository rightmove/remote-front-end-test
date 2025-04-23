import { useState, useCallback } from 'react';

export const usePropertiesSearch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);

    const loadResults = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch('http://localhost:3000/api/properties', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            if (!res.ok) {
                setError(true);
            } else {
                setResults(data);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    return { loadResults, results, loading, error };
};
