import React from 'react';
import PropertyCard from '../PropertyCard';
import { useProperties } from '../../providers/propertiesProvider';
import './PropertyListing.scss';

const PropertyListing = () => {
    const { properties } = useProperties()

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
