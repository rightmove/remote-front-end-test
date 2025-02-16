import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';


const PropertyListing = () => {
    const [propertyLisitings, setPropertyLisitings] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // TODO: Extract this into a http client
        fetch('http://localhost:3000/api/properties')
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                setPropertyLisitings(json);
                setLoading(false);
            })
            .catch((error) => {
                // TODO: Do not publish to production with console.log
                // replace console.log with observability logger
                console.log(error);
                // TODO: Speak to UX about what they would like the client to see in an error case,
                // currently shows the 'no properties' message
                setLoading(false);
            });
    }, []);

    // TODO: Speak to UX about what they would like the loading state to be
    if(loading) return <div>Loading...</div>
    if(propertyLisitings.length === 0) return <h2>There are currently no properties that meet your search criteria</h2>
    return (
        <ul className="PropertyListing">
            {propertyLisitings
                .map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
