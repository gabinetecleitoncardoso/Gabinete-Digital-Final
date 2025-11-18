
import React from 'react';
import { BackIcon } from './icons.tsx';
import { brandingData } from '../data/content.ts';

interface HeaderProps {
    showBackButton?: boolean;
    onGoBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false, onGoBack }) => {
  return (
    <header className="bg-brand-navy text-white p-4 shadow-md sticky top-0 z-20 border-b border-gray-600">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center space-x-4">
           {showBackButton && (
            <button onClick={onGoBack} className="p-2 -ml-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Voltar">
                <BackIcon className="h-6 w-6" />
            </button>
          )}
          <div className="bg-white rounded-lg p-1 flex items-center justify-center h-14 w-14 shadow-sm">
            <img src={brandingData.logoUrl} alt="Logomarca" className="h-12 w-12" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-gold">Gabinete Digital</h1>
            <p className="text-sm md:text-base text-gray-300">Dep. Cleiton Cardoso</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;