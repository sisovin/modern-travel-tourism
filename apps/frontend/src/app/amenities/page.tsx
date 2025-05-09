import React, { useState } from 'react';
import '../../styles/amenities.css';
import AmenityCard from '../../components/AmenityCard';
import AmenityFilter from '../../components/AmenityFilter';

const mockAmenities = [
  {
    id: 1,
    type: 'pool',
    title: 'Swimming Pool',
    description: 'Enjoy our luxurious swimming pool with a beautiful view.',
    image: '/images/amenities/pool.jpg',
  },
  {
    id: 2,
    type: 'spa',
    title: 'Spa',
    description: 'Relax and rejuvenate at our full-service spa.',
    image: '/images/amenities/spa.jpg',
  },
  {
    id: 3,
    type: 'gym',
    title: 'Gym',
    description: 'Stay fit and healthy at our state-of-the-art gym.',
    image: '/images/amenities/gym.jpg',
  },
  // Add more amenities as needed
];

const AmenitiesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredAmenities = selectedFilter === 'all'
    ? mockAmenities
    : mockAmenities.filter(amenity => amenity.type === selectedFilter);

  return (
    <div className="amenities-page">
      <h1 className="text-4xl font-bold mb-6">Amenities</h1>
      <AmenityFilter selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
      <div className="masonry-grid">
        {filteredAmenities.map(amenity => (
          <AmenityCard key={amenity.id} title={amenity.title} description={amenity.description} image={amenity.image} />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesPage;
