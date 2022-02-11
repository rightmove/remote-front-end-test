import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const apiEndpoint = new URL('api/properties', 'http://localhost:3000');

const App = () => {
    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        async function fetchProperties() {
            const response = await fetch(apiEndpoint.toString());
            const data = await response.json();

            setPropertyData(data);
        }

        fetchProperties();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing propertyData={propertyData} />
            </main>
        </div>
    );
};

export default App;
