import React from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { PropertiesProvider } from '../../providers/propertiesProvider';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <PropertiesProvider>
                    <SortAndFilter />
                    <PropertyListing />
                </PropertiesProvider>
            </main>
        </div>
    );
};

export default App;
