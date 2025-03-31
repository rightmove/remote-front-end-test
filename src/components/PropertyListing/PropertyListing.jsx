import React, { useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { useFetchProperties } from './use-fetch-properties';

const PropertyListing = () => {
    const { isLoading, properties, fetchProperties } = useFetchProperties();

    useEffect(() => {
        fetchProperties();
    }, [fetchProperties]);

    if (isLoading) {
        return <>Loading...</>;
    }

    return (
        <ul className="PropertyListing">
            {properties.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
