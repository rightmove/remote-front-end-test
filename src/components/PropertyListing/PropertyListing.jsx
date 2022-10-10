import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import PropTypes from 'prop-types';

const PropertyListing = ({ data }) => {
    PropertyListing.propTypes = {
        data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
    };

    return (
        <ul className="PropertyListing">
            {data.slice(0, 5).map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
