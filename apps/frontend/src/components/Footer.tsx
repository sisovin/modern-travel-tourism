import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-8">
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-gray-800 dark:text-gray-200">
          &copy; {new Date().getFullYear()} Modern Travel & Tourism. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
