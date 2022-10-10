import React from 'react';
import './SortAndFilter.scss';
import Dropdown from './Dropdown/Dropdown.jsx';
import { bedOptions } from '../../constants/index.js';
import PropTypes from 'prop-types';

const SortAndFilter = ({ selectedOption, setSelectedOption }) => {
    SortAndFilter.propTypes = {
        selectedOption: PropTypes.number.isRequired,
        setSelectedOption: PropTypes.number.isRequired,
    };

    return (
        <div className="SortAndFilter">
            <Dropdown
                options={bedOptions}
                label="Select the number of bedrooms"
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
        </div>
    );
};

export default SortAndFilter;
