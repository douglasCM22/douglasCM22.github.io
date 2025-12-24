import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-white">Bachelor of Computer Science</h4>
            <p className="text-stone-400">UniRitter | Jan 2018 – Dec 2024</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Certifications</h4>
            <ul className="list-disc list-inside text-stone-400 text-sm mt-1">
              <li>Software Testing (Extension Course)</li>
              <li>Web Designer</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Languages</h3>
          <ul className="space-y-2 text-stone-400">
            <li className="flex items-center">
              <span className="w-24 font-semibold text-stone-300">Portuguese:</span> Native
            </li>
            <li className="flex items-center">
              <span className="w-24 font-semibold text-stone-300">English:</span> Professional Working
            </li>
            <li className="flex items-center">
              <span className="w-24 font-semibold text-stone-300">Japanese:</span> Elementary
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-700 text-center text-sm text-stone-500">
        <p>&copy; 2025 Douglas Marques. Interactive Resume.</p>
      </div>
    </footer>
  );
};

export default Footer;
