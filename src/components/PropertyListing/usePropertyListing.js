import { useEffect, useState } from 'react';

export function usePropertyListing() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        (async function run() {
            const response = await fetch('http://localhost:3000/api/properties');

            if (!response.ok) {
                console.error('Something went wrong');

                return;
            }

            const data = await response.json();

            setProperties(data);
        })();
    }, []);

    return properties;
}
