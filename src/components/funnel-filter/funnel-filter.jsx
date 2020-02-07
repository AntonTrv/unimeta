import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './funnel-filter.scss';

const Filter = ({handleChange}) => (
    <div className='filter-wrapper'>
        <input onChange={handleChange} placeholder="Enter funnel name" type="text"/>
    </div>
)

Filter.propTypes = {
    handleChange: PropTypes.func
}

export default  Filter;