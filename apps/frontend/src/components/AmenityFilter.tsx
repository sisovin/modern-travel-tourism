import React from 'react';

interface AmenityFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const AmenityFilter: React.FC<AmenityFilterProps> = ({ selectedFilter, onFilterChange }) => {
  const filters = ['all', 'pool', 'spa', 'gym'];

  return (
    <div className="amenity-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default AmenityFilter;
