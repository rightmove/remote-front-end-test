import React, { useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { usePropertiesSearch } from '../../hooks/use-properties-search';

const PropertyListing = () => {
    const { results, loadResults } = usePropertiesSearch();

    useEffect(() => {
        loadResults();
    }, [loadResults]);

    return (
        <ul className="PropertyListing">
            {results.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
