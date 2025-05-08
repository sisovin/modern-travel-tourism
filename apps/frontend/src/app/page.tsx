import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import RoomSearch from '../components/RoomSearch';
import FeaturedRooms from '../components/FeaturedRooms';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <RoomSearch />
      <FeaturedRooms />
      <TestimonialsCarousel />
    </div>
  );
};

export default HomePage;
