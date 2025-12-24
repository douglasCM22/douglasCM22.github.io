import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-stone-800">Douglas Marques</span>
            <span className="hidden md:block ml-4 text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
              Senior Software Engineer
            </span>
          </div>
          <nav className="flex space-x-4 md:space-x-8">
            <button onClick={() => scrollToSection('experience')} className="text-stone-600 hover:text-amber-600 font-medium transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-stone-600 hover:text-amber-600 font-medium transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-stone-600 hover:text-amber-600 font-medium transition-colors">
              Impact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
