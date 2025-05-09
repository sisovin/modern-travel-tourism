import React from 'react';

interface AmenityCardProps {
  title: string;
  description: string;
  image: string;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ title, description, image }) => {
  return (
    <div className="amenity-card">
      <img src={image} alt={title} className="amenity-card-image" />
      <div className="amenity-card-content">
        <h3 className="amenity-card-title">{title}</h3>
        <p className="amenity-card-description">{description}</p>
      </div>
    </div>
  );
};

export default AmenityCard;
