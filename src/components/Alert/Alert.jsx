import React from 'react';
import './Alert.scss';
import PropTypes from 'prop-types';

const Alert = ({ type, children }) => {
    return (
        <div role="alert" className={`Alert ${type}`}>{children}</div>
    )
}

Alert.propTypes = {
    type: PropTypes.oneOf([
        'error',
        'success',
        'warning',
    ])
};

export default Alert;
