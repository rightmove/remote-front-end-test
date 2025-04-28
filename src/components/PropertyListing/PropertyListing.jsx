import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import { fetchProperties } from '../../services/propertyService';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const loadProperties = async () => {
            try {
                const data = await fetchProperties();
                setProperties(data || []);
            } catch (err) {
                setError('Failed to load properties. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        loadProperties();
    }, []);

    if (loading) {
        return <div className="loading" role="status" aria-live="polite">Loading...</div>;
    }

    if (error) {
        return <div className="error" role="alert">{error}</div>;
    }

    if (properties.length === 0) {
        return <div className="no-properties" role="status" aria-live="polite">No properties found.</div>;
    }

    return (
        <ul className="PropertyListing" role='list' data-testid="property-listing" aria-label="List of properties">
            {properties.map((property) => (
                <li key={property.id} role="listitem">
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
