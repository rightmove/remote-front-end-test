import React, { useState } from 'react';
import './SortAndFilter.scss';
import MultiSelect from './MultiSelect';
import Dropdown from './Dropdown';
import { sortOptions, orderOptions } from '../../constants';
import useProperties from '../../hooks/useProperties';

const SortAndFilter = ({ setFilterType }) => {
  //const { properties, error, loading } = useProperties();
  //console.log(`filterType: `, filterType);

  return (
    <div className="SortAndFilter">
      {/* <MultiSelect /> */}
      <Dropdown
        options={sortOptions}
        label="SortAndFilter"
        onChange={(value) => setFilterType(value)}
      />
    </div>
  );
};

export default SortAndFilter;
