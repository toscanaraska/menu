
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

          <div className="flex items-center gap-3">
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:bg-white/5 transition-all active:scale-95 group border border-white/5"
            >
              <span className={`text-xs font-black uppercase tracking-widest ${language === 'sr' ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`}>SR</span>
              <div className="w-px h-3 bg-white/10"></div>
              <span className={`text-xs font-black uppercase tracking-widest ${language === 'en' ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`}>EN</span>
            </button>
          </div>
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

          <div className="bg-white/5 rounded-3xl p-8 mb-10 border border-white/5 inline-block text-center shadow-2xl">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-4">
              {language === 'sr' ? 'Radno Vreme' : 'Working Hours'}
            </h4>
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-200">
                {restaurant.workHours[language].split('|')[0].trim()}
              </p>
              <p className="text-sm font-bold text-amber-500">
                {restaurant.workHours[language].split('|')[1]?.trim()}
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-6 pt-6 border-t border-white/5 uppercase tracking-widest">
              {restaurant.address[language]}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 mt-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center gap-3 text-amber-500 font-black text-xs uppercase tracking-widest border-2 border-amber-500/20 px-8 py-4 rounded-2xl hover:bg-amber-500 hover:text-black transition-all shadow-lg shadow-amber-500/10 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {language === 'sr' ? `Pozovi nas: ${restaurant.phone}` : `Call us: ${restaurant.phone}`}
              </a>

              {restaurant.instagram && (
                <a
                  href={restaurant.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest border-2 border-white/10 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all shadow-xl active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              )}
            </div>
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
