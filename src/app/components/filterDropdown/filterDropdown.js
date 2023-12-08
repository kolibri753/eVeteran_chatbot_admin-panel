import React from 'react';

const FilterDropdown = ({ value, onChange, options }) => (
  <div>
    <label>
      Show:
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default FilterDropdown;
