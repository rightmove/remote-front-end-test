import React, { useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {

  const [propertyData, setPropertyData] = useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/properties');

        if (!res.ok) {
          throw new Error("Bad response from server");
        }

        const data = await res.json();
        setPropertyData(data)
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [])

  return (
    <ul className="PropertyListing">
        {propertyData.map((property, index) => (
          <li key={index}>
            <PropertyCard {...property} />
          </li>
        ))}
    </ul>
  );
};

export default PropertyListing;
