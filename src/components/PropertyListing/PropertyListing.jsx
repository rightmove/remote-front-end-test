import React from 'react';
import useFetch from '../../hooks/useFetch';
import PropertyCard from '../PropertyCard';
import Alert from '../Alert';
import Spinner from '../Spinner';
import './PropertyListing.scss';

const PropertyListing = () => {
    const { data: properties, loading, error } = useFetch('/api/properties');

    if (loading) return <Spinner />;
    return (
        <>
            {error && (
                <Alert type="error">{error}</Alert>
            )}
            {properties && properties.length && (
                <ul className="PropertyListing">
                    {properties
                        .map((property) => (
                            <li key={property.id}>
                                <PropertyCard {...property} />
                            </li>
                        ))}
                </ul>
            )}
        </>
    );
};

export default PropertyListing;
