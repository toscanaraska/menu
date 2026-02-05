
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  language: 'sr' | 'en';
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, language }) => {
  return (
    <div className="group relative flex flex-col bg-white/[0.03] border border-white/[0.04] rounded-3xl p-5 md:p-6 hover:bg-white/[0.06] hover:border-lavender-400/20 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lavender-500/10">
      {/* Decorative Gradient Background on Hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-lavender-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="flex justify-between items-start mb-3 relative z-10">
        <h3 className="font-bold text-slate-100 text-[16px] md:text-[17px] leading-tight group-hover:text-amber-400 transition-colors">
          {item.name[language]}
        </h3>
        {item.price !== undefined && (
          <span className="font-black text-amber-500 ml-3 tabular-nums text-base shrink-0">
            {item.price.toLocaleString('sr-RS')}<span className="text-[10px] ml-0.5 opacity-50 uppercase tracking-tighter">RSD</span>
          </span>
        )}
      </div>

      <div className="flex gap-4 flex-1 relative z-10">
        <div className="flex-1">
          <p className="text-[11px] text-slate-400 leading-relaxed font-medium opacity-70 line-clamp-3 md:line-clamp-none">
            {item.description[language]}
          </p>

          {item.tags && item.tags[language] && item.tags[language].length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags[language].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-white/5 text-slate-400 text-[8px] font-black rounded-lg uppercase tracking-widest border border-white/5 group-hover:text-amber-500/70 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {item.imageUrl && (
          <div className="shrink-0">
            <img
              src={item.imageUrl}
              alt={item.name[language]}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl shadow-xl border border-white/5 group-hover:scale-105 transition-transform duration-700 grayscale-[10%] group-hover:grayscale-0"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
