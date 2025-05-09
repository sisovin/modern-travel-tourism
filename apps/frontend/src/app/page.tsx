import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import RoomSearch from '../components/RoomSearch';
import FeaturedRooms from '../components/FeaturedRooms';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ReservationForm from '../components/ReservationForm';

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <RoomSearch />
      <FeaturedRooms />
      <TestimonialsCarousel />
      <ReservationForm />
    </div>
  );
};

export default HomePage;
