import React from 'react';
import 'tailwindcss/tailwind.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: '/images/user1.jpg',
    testimonial: 'This was the best vacation ever! Highly recommend.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/images/user2.jpg',
    testimonial: 'Amazing experience, great service and beautiful locations.',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    image: '/images/user3.jpg',
    testimonial: 'A wonderful trip with unforgettable memories.',
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <div className="flex overflow-x-scroll space-x-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow-md rounded-md p-4 flex-shrink-0 w-80">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">{testimonial.name}</h3>
            <p className="text-gray-700 text-center">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
