import { useEffect, useState } from 'react';
import fetch from 'cross-fetch';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);

            if (response.ok) {
                setData(await response.json());
                setError(null);
            } else {
                // In real-life would handle the error better here
                // and display a more relevant message, with some logging too.
                setError('Sorry, something has gone wrong.');
            }
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}
