import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useProperties from '../../hooks/useProperties';

const PropertyListing = ({ params }) => {
  const { properties, error, loading } = useProperties(params);

  return (
    <div className="PropertyListing">
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}

      {!error &&
        !loading &&
        properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
    </div>
  );
};

export default PropertyListing;
