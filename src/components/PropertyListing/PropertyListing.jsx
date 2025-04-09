import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { useGetProperties } from '../../hooks/useGetProperties';

const PropertyListing = () => {
    const properties = useGetProperties();

    return (
        <ul className="PropertyListing">
            {properties?.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
