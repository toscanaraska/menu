
export enum CategoryType {
  FOOD = 'FOOD',
  ALCOHOL = 'ALCOHOL',
  NON_ALCOHOL = 'NON_ALCOHOL',
  DESSERT = 'DESSERT',
  COFFEE = 'COFFEE',
  DRINK = 'DRINK'
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: { sr: string; en: string };
  description: { sr: string; en: string };
  price: number;
  currency: string;
  imageUrl?: string;
  isAvailable: boolean;
  tags?: { sr: string[]; en: string[] };
}

export interface Category {
  id: string;
  name: { sr: string; en: string };
  type: CategoryType;
  order: number;
  imageUrl?: string;
  imagePosition?: string;
}

export interface RestaurantInfo {
  name: string;
  logo?: string;
  address: { sr: string; en: string };
  phone: string;
  instagram?: string;
  workHours: { sr: string; en: string };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface MenuState {
  categories: Category[];
  items: MenuItem[];
  restaurant: RestaurantInfo;
  language: 'sr' | 'en';
}
