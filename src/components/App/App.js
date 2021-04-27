import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
  const [filterType, setFilterType] = useState();
  return (
    <div className="App">
      <Header />
      <main>
        <SortAndFilter setFilterType={setFilterType} />
        <PropertyListing params={filterType} />
      </main>
    </div>
  );
};

export default App;
