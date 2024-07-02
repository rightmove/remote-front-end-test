import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { usePropertyListing } from './usePropertyListing';

const PropertyListing = () => {
    const properties = usePropertyListing();

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
