import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode support
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Specify the paths to all of the template files in your project
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Include custom font Raleway
        serif: ['Roboto Slab', 'serif'], // Include custom font Roboto Slab
      },
    },
  },
  plugins: [],
};

export default config;
