import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Raleway, RobotoSlab } from 'next/font/google';
import '../styles/globals.css';

// Import Google Fonts for Raleway and Roboto Slab
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const robotoSlab = RobotoSlab({ subsets: ['latin'], variable: '--font-roboto-slab' });

// Implement dark mode support
const darkModeClass = 'dark';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={`${raleway.variable} ${robotoSlab.variable} ${darkModeClass}`}>
      {/* Shared header component */}
      <Header />
      <main>{children}</main>
      {/* Shared footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
