import { useEffect, useState } from 'react';

export const useGetProperties = () => {
    const [properties, setProperties] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/properties');
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);
    return properties;
};
