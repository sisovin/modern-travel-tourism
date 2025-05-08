import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>Modern Travel & Tourism</a>
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/about">
            <a className="text-gray-800 dark:text-gray-200">About</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-800 dark:text-gray-200">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-800 dark:text-gray-200">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
