
import React, { useState, useMemo } from 'react';
import { INITIAL_DATA } from './constants';
import { MenuState, MenuItem } from './types';
import Layout from './components/Layout';
import MenuItemCard from './components/MenuItemCard';

const App: React.FC = () => {
  const [data] = useState<MenuState>(INITIAL_DATA);
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const [menuType, setMenuType] = useState<'FOOD' | 'DRINK'>('FOOD');
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    INITIAL_DATA.categories[0].id
  );
  const [searchQuery, setSearchQuery] = useState("");

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .replace(/š/g, 's')
      .replace(/đ/g, 'd')
      .replace(/ž/g, 'z')
      .replace(/č/g, 'c')
      .replace(/ć/g, 'c');
  };

  const filteredItems = useMemo(() => {
    const query = normalizeText(searchQuery);
    return data.items.filter(item =>
      normalizeText(item.name[language]).includes(query) ||
      normalizeText(item.description[language]).includes(query)
    );
  }, [data.items, searchQuery, language]);

  const visibleCategories = useMemo(() => {
    return data.categories
      .filter(cat => menuType === 'FOOD' ? cat.order < 20 : cat.order >= 20)
      .sort((a, b) => a.order - b.order);
  }, [data.categories, menuType]);

  const activeCategory = useMemo(() => {
    return data.categories.find(c => c.id === activeCategoryId);
  }, [data.categories, activeCategoryId]);

  const activeItems = useMemo(() => {
    if (searchQuery) return filteredItems;
    return filteredItems.filter(item => item.categoryId === activeCategoryId);
  }, [filteredItems, activeCategoryId, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategoryId(catId);
    if (searchQuery) setSearchQuery("");
  };

  const handleMenuTypeToggle = (type: 'FOOD' | 'DRINK') => {
    if (menuType === type) return;
    setMenuType(type);
    setSearchQuery("");
    // Find first category of new type
    const firstCat = data.categories.find(c => type === 'FOOD' ? c.order < 20 : c.order >= 20);
    if (firstCat) setActiveCategoryId(firstCat.id);

    // Smooth scroll to top when switching
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === 'sr' ? 'en' : 'sr');
  };

  const MAP_URL = "https://www.google.com/maps/place/La+Toscana/@43.2841875,20.6148125,771m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4756305d6667fd9f:0x95816bfa6c7a82a4!8m2!3d43.2841875!4d20.6148125!16s%2Fg%2F11f03sg1kk?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D";
  const REVIEWS_URL = "https://www.google.com/search?q=la+toscana+raska+recenzije";

  const labels = {
    search: { sr: "Pretraži meni...", en: "Search menu..." },
    noResults: { sr: "Nema rezultata za pretragu.", en: "No results found." },
    food: { sr: "Hrana", en: "Food" },
    drink: { sr: "Piće", en: "Drinks" },
    menu: { sr: "Meni", en: "Menu" },
    map: { sr: "Mapa", en: "Map" },
    reviews: { sr: "Recenzije", en: "Reviews" },
    searchResults: { sr: "Rezultati pretrage za", en: "Search results for" }
  };

  return (
    <Layout
      restaurant={data.restaurant}
      language={language}
      onLanguageToggle={handleLanguageToggle}
    >
      {/* Food / Drink Toggle */}
      <div className="px-6 pt-8 w-full max-w-4xl mx-auto flex justify-center">
        <div className="flex bg-white/[0.03] p-1.5 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-md">
          <button
            onClick={() => handleMenuTypeToggle('FOOD')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 ease-out active:scale-95 ${menuType === 'FOOD'
              ? 'bg-amber-500 text-black shadow-xl shadow-amber-500/20'
              : 'text-slate-500 hover:text-slate-300'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {labels.food[language]}
          </button>
          <button
            onClick={() => handleMenuTypeToggle('DRINK')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 ease-out active:scale-95 ${menuType === 'DRINK'
              ? 'bg-amber-500 text-black shadow-xl shadow-amber-500/20'
              : 'text-slate-500 hover:text-slate-300'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.804 5.314c1.015-1.254 2.925-1.503 4.242-.519 1.318.984 3.23.984 4.548 0 1.317-.984 3.227-.735 4.242.519M4.804 5.314C3.89 6.445 3.5 8.01 3.5 9.5c0 4.142 3.806 7.5 8.5 7.5s8.5-3.358 8.5-7.5c0-1.49-.39-3.055-1.304-4.186M4.804 5.314L12 12.5l7.196-7.186M12 17v5m-4 0h8" />
            </svg>
            {labels.drink[language]}
          </button>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="px-6 pt-6 w-full max-w-4xl mx-auto">
        <div className="relative group">
          <input
            type="text"
            placeholder={labels.search[language]}
            className="w-full pl-12 pr-4 py-4 md:py-5 bg-white/[0.02] border border-white/5 rounded-2xl text-sm md:text-base text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all shadow-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="w-5 h-5 text-slate-600 absolute left-5 top-1/2 -translate-y-1/2 group-focus-within:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="sticky top-[81px] md:top-[93px] z-40 bg-[#2d1b36]/80 backdrop-blur-xl border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-2 md:gap-4 px-6 py-4 min-w-max md:justify-center">
            {visibleCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex-shrink-0 whitespace-nowrap px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 border ${activeCategoryId === cat.id && !searchQuery
                  ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200'
                  }`}
              >
                {cat.name[language]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Header */}
      {searchQuery && (
        <div className="px-6 pt-12 pb-4 w-full max-w-4xl mx-auto text-center border-b border-white/5 mb-8">
          <h2 className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
            {labels.searchResults[language]}: <span className="text-amber-500">"{searchQuery}"</span>
          </h2>
        </div>
      )}

      {/* Category Hero Section */}
      {!searchQuery && activeCategory && activeCategory.imageUrl && (
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden flex items-center justify-center">
          <img
            src={import.meta.env.BASE_URL + activeCategory.imageUrl}
            alt={activeCategory.name[language]}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{ objectPosition: activeCategory.imagePosition || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b36] via-[#2d1b36]/20 to-transparent"></div>
          <div className="relative z-10 px-6 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif uppercase tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              {activeCategory.name[language]}
            </h2>
          </div>
        </div>
      )}

      {/* Items Grid Layout */}
      <div className={`px-4 py-8 md:px-8 max-w-7xl mx-auto w-full mb-24 transition-all duration-500 ${!searchQuery && activeCategory?.imageUrl ? '-mt-6 relative z-10' : ''}`}>
        {searchQuery ? (
          filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {filteredItems.map(item => (
                <MenuItemCard key={`search-${item.id}`} item={item} language={language} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center w-full animate-in fade-in duration-700">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.03] text-slate-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                {labels.noResults[language]}
              </p>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeItems.map(item => (
              <MenuItemCard key={`cat-${item.id}`} item={item} language={language} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-50">
        <div className="glass rounded-[2.5rem] p-2 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => { setSearchQuery(""); setActiveCategoryId(data.categories[0].id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex-1 flex flex-col items-center gap-1 py-3 bg-amber-500 rounded-[2.2rem] text-black transition-all active:scale-95 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            <span className="text-[9px] font-black uppercase tracking-tighter">{labels.menu[language]}</span>
          </button>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center gap-1 py-3 text-slate-500 hover:text-amber-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="text-[9px] font-black uppercase tracking-tighter">{labels.map[language]}</span>
          </a>
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center gap-1 py-3 text-slate-500 hover:text-amber-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <span className="text-[9px] font-black uppercase tracking-tighter">{labels.reviews[language]}</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default App;
