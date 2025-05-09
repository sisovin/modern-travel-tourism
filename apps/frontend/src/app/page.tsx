import React from 'react';
import dynamic from 'next/dynamic';

const HeroCarousel = dynamic(() => import('../components/HeroCarousel'));
const RoomSearch = dynamic(() => import('../components/RoomSearch'));
const FeaturedRooms = dynamic(() => import('../components/FeaturedRooms'));
const TestimonialsCarousel = dynamic(() => import('../components/TestimonialsCarousel'));
const ReservationForm = dynamic(() => import('../components/ReservationForm'));

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
