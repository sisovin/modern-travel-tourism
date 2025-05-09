import React from 'react';

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, position, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-full mx-auto mt-4" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">{position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
