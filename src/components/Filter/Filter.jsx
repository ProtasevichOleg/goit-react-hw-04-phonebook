// Filter.jsx
import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const searchInputId = nanoid();

const Filter = ({ value, onChange }) => (
  <>
    <FilterLabel htmlFor={searchInputId}>Find contacts by name</FilterLabel>
    <FilterInput
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Enter contact name"
      id={searchInputId}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
