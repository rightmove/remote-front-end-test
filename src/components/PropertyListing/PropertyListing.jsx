import React from 'react';
import PropertyCard from '../PropertyCard';
import { useProperties } from '../../hooks/useProperties';
import './PropertyListing.scss';

const PropertyListing = () => {
    const { properties, error, isLoading } = useProperties();

    if (isLoading) {
        return <div>Loading properties...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ul className="PropertyListing">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
