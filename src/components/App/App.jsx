import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('All');

    useEffect(() => {
        fetch('http://localhost:3000/api/properties')
            .then((resp) => resp.json())
            .then((data) => setData(data))
            .catch(console.log('Error fetching!'));
    }, []);

    let filteredData = data;
    if (selectedOption == 'All') {
        filteredData = data;
    } else {
        filteredData = data.filter((d) => d.bedrooms == selectedOption);
    }
    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <PropertyListing data={filteredData} />
            </main>
        </div>
    );
};

export default App;
