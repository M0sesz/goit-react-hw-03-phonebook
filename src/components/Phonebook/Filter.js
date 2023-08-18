import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter contacts by name: </label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
