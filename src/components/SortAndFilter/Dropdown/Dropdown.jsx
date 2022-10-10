import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const Dropdown = ({ selectedOption, setSelectedOption, options, label }) => {
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div className="Dropdown">
            <label>
                {label}
                <select value={selectedOption} onChange={handleChange}>
                    <option value="All">All</option>
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </label>
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    onChange: PropTypes.func, // (selectedOption) => {}
    label: PropTypes.string,
    setSelectedOption: PropTypes.number,
    selectedOption: PropTypes.number,
};

export default Dropdown;
