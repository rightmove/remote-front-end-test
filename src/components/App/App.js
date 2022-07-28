import React from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing />
            </main>
        </div>
    );
};

export default App;
