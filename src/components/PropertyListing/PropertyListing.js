import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ propertyData = [] }) => {
    return (
        <div className="PropertyListing">
            {propertyData.map((property, index) => (
                <PropertyCard key={index} {...property} />
            ))}
        </div>
    );
};

export default PropertyListing;
