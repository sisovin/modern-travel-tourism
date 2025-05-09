import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const featuredRooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    image: '/images/room1.jpg',
    description: 'A luxurious room with a beautiful view.',
    price: '$200/night',
  },
  {
    id: 2,
    name: 'Suite',
    image: '/images/room2.jpg',
    description: 'A spacious suite with modern amenities.',
    price: '$350/night',
  },
  {
    id: 3,
    name: 'Standard Room',
    image: '/images/room3.jpg',
    description: 'A comfortable room with all the essentials.',
    price: '$150/night',
  },
];

const FeaturedRooms: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredRooms.map((room) => (
          <div key={room.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <Image src={room.image} alt={room.name} className="w-full h-48 object-cover" width={500} height={300} />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{room.name}</h3>
              <p className="text-gray-700 mb-4">{room.description}</p>
              <p className="text-indigo-600 font-bold">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
