import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 mt-8">
      <div className="container mx-auto text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} My Next.js App
      </div>
    </footer>
  );
};

export default Footer;
