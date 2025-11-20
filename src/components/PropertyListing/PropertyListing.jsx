import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { getPropertiesData } from '../../../api/getPropertiesData';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProperties(await getPropertiesData());
            } catch (err) {
                setError('Failed to load properties');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return (
            <div className="error-message" role="alert">
                {error}
            </div>
        );
    }

    if (!isLoading && properties.length === 0) {
        return <div role="status">No properties found.</div>;
    }

    return (
        <>
            {isLoading ? (
                <div data-testid="loading-spinner" role="status">
                    Loading...
                </div>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <h2 id="property-list-heading" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Properties
                    </h2>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                        }}
                        className="property-listing"
                    >
                        {properties.map((property, index) => (
                            <li key={index}>
                                <PropertyCard {...property} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default PropertyListing;
