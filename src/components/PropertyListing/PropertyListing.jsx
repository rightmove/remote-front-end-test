import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { useFetchPropertyListingData } from '../../hooks';

const PropertyListing = () => {
    const { propertyListingData, propertyListingError, isPropertyListingLoading } = useFetchPropertyListingData();

    if (isPropertyListingLoading) {
        return <div>LOADING</div>;
    }
    if (propertyListingError) {
        return (
            <div>
                <p>Ooops! Something has gone wrong</p>
            </div>
        );
    }

    return (
        <ul className="PropertyListing">
            {propertyListingData.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
