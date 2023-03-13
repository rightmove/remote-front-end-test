import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchProperties() {
            try {
                const data = await fetch(`http://localhost:3000/api/properties`);
                const json = await data.json();
                setData(json);
            } catch (error) {
                console.warn(`Error fetching properties: ${error}`);
            }
        }

        fetchProperties();
    }, []);

    const TopFiveProperties = data.slice(0, 5);

    return (
        <ul className="PropertyListing">
            {TopFiveProperties.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
