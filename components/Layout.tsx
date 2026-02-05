
import React from 'react';
import { RestaurantInfo } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  restaurant: RestaurantInfo;
  language: 'sr' | 'en';
  onLanguageToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, restaurant, language, onLanguageToggle }) => {
  return (
    <div className="min-h-screen bg-[#2d1b36] text-slate-100 flex flex-col">
      {/* Header with fluid width */}
      <header className="sticky top-0 z-50 bg-[#2d1b36]/80 backdrop-blur-xl border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-tight text-lavender-100 uppercase leading-none">
              <span className="text-amber-500">{restaurant.name.split(' ')[0]}</span> {restaurant.name.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.3em] mt-1.5 opacity-70">Pizza na drva • Cucina Italiana</p>
          </div>

          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/5 transition-all active:scale-95 group border border-white/5"
          >
            <span className={`text-xs font-black uppercase tracking-widest ${language === 'sr' ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`}>SR</span>
            <div className="w-px h-3 bg-white/10"></div>
            <span className={`text-xs font-black uppercase tracking-widest ${language === 'en' ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`}>EN</span>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>

      <footer className="w-full px-6 py-16 bg-black/20 border-t border-white/5 text-center mt-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 opacity-30 grayscale flex justify-center">
            <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center font-serif italic text-[10px] uppercase tracking-tighter">La Toscana</div>
          </div>
          <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">{restaurant.address[language]}</p>
          <p className="text-xs text-slate-500 mt-3 uppercase tracking-widest">{restaurant.workHours[language]}</p>

          <div className="flex justify-center gap-6 mt-10">
            <a href={`tel:${restaurant.phone}`} className="text-amber-500 font-black text-xs uppercase tracking-widest border-2 border-amber-500/20 px-10 py-4 rounded-2xl hover:bg-amber-500 hover:text-black transition-all shadow-lg shadow-amber-500/10 active:scale-95">
              {language === 'sr' ? 'Pozovi nas' : 'Call us'}
            </a>
          </div>

          <p className="mt-16 text-[9px] text-slate-600 uppercase tracking-[0.2em] font-medium">
            © 2024 La Toscana Raška • {language === 'sr' ? 'Digitalni Meni' : 'Digital Menu'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
