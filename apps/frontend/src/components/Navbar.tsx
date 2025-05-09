import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>Modern Travel & Tourism</a>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about">
            <a className="text-gray-800 dark:text-gray-200">About</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-800 dark:text-gray-200">Services</a>
          </Link>
          <Link href="/destinations">
            <a className="text-gray-800 dark:text-gray-200">Destinations</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-800 dark:text-gray-200">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-800 dark:text-gray-200">Contact</a>
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <a className="text-gray-800 dark:text-gray-200">Login</a>
          </Link>
          <Link href="/register">
            <a className="text-gray-800 dark:text-gray-200">Register</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-200">
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <Link href="/about">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">About</a>
          </Link>
          <Link href="/services">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">Services</a>
          </Link>
          <Link href="/destinations">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">Destinations</a>
          </Link>
          <Link href="/blog">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">Contact</a>
          </Link>
          <Link href="/login">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">Login</a>
          </Link>
          <Link href="/register">
            <a className="block px-4 py-2 text-gray-800 dark:text-gray-200">Register</a>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
