
import { CategoryType, MenuState } from './types';

export const INITIAL_DATA: MenuState = {
  restaurant: {
    name: "La Toscana",
    address: { sr: "Raška, Srbija", en: "Raska, Serbia" },
    phone: "060 439 000 9",
    instagram: "https://www.instagram.com/la____toscana/",
    workHours: {
      sr: "Pon - Sub: 08:00 - 23:00 | Nedelja: 09:00 - 23:00",
      en: "Mon - Sat: 08:00 - 23:00 | Sunday: 09:00 - 23:00"
    },
    coordinates: { lat: 43.2841875, lng: 20.6148125 }
  },
  language: 'sr',
  categories: [
    // FOOD CATEGORIES (1-19)
    { id: 'cat_dorucak', name: { sr: 'Doručak (08-13h)', en: 'Breakfast (08-13h)' }, type: CategoryType.FOOD, order: 1, imageUrl: "assets/cat_breakfast.png" },
    { id: 'cat_sendvici', name: { sr: 'Sendviči i Predjela', en: 'Sandwiches & Appetizers' }, type: CategoryType.FOOD, order: 2, imageUrl: "assets/cat_sandwiches.png" },
    { id: 'cat_palacinke_slane', name: { sr: 'Slane Palačinke & Panuozzo', en: 'Savory Crepes & Panuozzo' }, type: CategoryType.FOOD, order: 3, imageUrl: "assets/cat_savory_crepes.png" },
    { id: 'cat_burrito', name: { sr: 'Burrito', en: 'Burrito' }, type: CategoryType.FOOD, order: 4, imageUrl: "assets/cat_burrito.png" },
    { id: 'cat_piletina', name: { sr: 'Pileći Specijaliteti', en: 'Chicken Specialties' }, type: CategoryType.FOOD, order: 5, imageUrl: "assets/cat_chicken.png" },
    { id: 'cat_pizza', name: { sr: 'Pizza na drva', en: 'Wood-fired Pizza' }, type: CategoryType.FOOD, order: 6, imageUrl: "assets/cat_pizza.png" },
    { id: 'cat_salate', name: { sr: 'Salate', en: 'Salads' }, type: CategoryType.FOOD, order: 7, imageUrl: "assets/cat_salads.png" },
    { id: 'cat_paste', name: { sr: 'Paste', en: 'Pasta' }, type: CategoryType.FOOD, order: 8, imageUrl: "assets/cat_pasta.png" },
    { id: 'cat_njoki', name: { sr: 'Njoki - Gnocchi', en: 'Gnocchi' }, type: CategoryType.FOOD, order: 9, imageUrl: "assets/cat_gnocchi.png" },
    { id: 'cat_mlinci', name: { sr: 'Mlinci', en: 'Mlinci' }, type: CategoryType.FOOD, order: 10, imageUrl: "assets/cat_mlinci.png" },
    { id: 'cat_pivski_menu', name: { sr: 'Pivski Menu', en: 'Beer Menu' }, type: CategoryType.FOOD, order: 11, imageUrl: "assets/cat_savory.png" },
    { id: 'cat_dodaci_pizza', name: { sr: 'Dodaci za Pizze', en: 'Pizza Add-ons' }, type: CategoryType.FOOD, order: 12, imageUrl: "assets/cat_pizza_addons.png" },
    { id: 'cat_slatko', name: { sr: 'Slatki Zalogaji', en: 'Sweet Bites' }, type: CategoryType.DESSERT, order: 13, imageUrl: "assets/cat_dessert.png" },
    { id: 'cat_kupovi', name: { sr: 'Kupovi - Sladoledi', en: 'Ice Cream Cups' }, type: CategoryType.DESSERT, order: 14, imageUrl: "assets/cat_ice_cream.png", imagePosition: "center 40%" },

    // DRINK CATEGORIES (20+)
    { id: 'cat_hot_drinks', name: { sr: 'Topli i Hladni Napici', en: 'Hot & Cold Drinks' }, type: CategoryType.COFFEE, order: 20, imageUrl: "assets/cat_coffee.png" },
    { id: 'cat_water', name: { sr: 'Vode', en: 'Water' }, type: CategoryType.DRINK, order: 21, imageUrl: "assets/cat_water.png" },
    { id: 'cat_soft_drinks_gaz', name: { sr: 'Bezalkoholna (Gazirana)', en: 'Soft Drinks (Sparkling)' }, type: CategoryType.NON_ALCOHOL, order: 22, imageUrl: "assets/cat_soft_drinks_gaz.png" },
    { id: 'cat_soft_drinks_neg', name: { sr: 'Bezalkoholna (Negazirana)', en: 'Soft Drinks (Still)' }, type: CategoryType.NON_ALCOHOL, order: 23, imageUrl: "assets/cat_soft_drinks_neg.png" },
    { id: 'cat_pivo', name: { sr: 'Piva', en: 'Beer' }, type: CategoryType.ALCOHOL, order: 24, imageUrl: "assets/cat_beer.png" },
    { id: 'cat_zestina_domaca', name: { sr: 'Žestoka (Domaća)', en: 'Spirits (Domestic)' }, type: CategoryType.ALCOHOL, order: 25, imageUrl: "assets/cat_spirits_dom.png" },
    { id: 'cat_zestina_strana', name: { sr: 'Žestoka (Strana)', en: 'Spirits (Foreign)' }, type: CategoryType.ALCOHOL, order: 26, imageUrl: "assets/cat_spirits_str.png" },
    { id: 'cat_whiskey_konjak', name: { sr: 'Viski & Konjak', en: 'Whiskey & Cognac' }, type: CategoryType.ALCOHOL, order: 27, imageUrl: "assets/cat_whiskey.png" },
    { id: 'cat_likeri', name: { sr: 'Likeri', en: 'Liqueurs' }, type: CategoryType.ALCOHOL, order: 28, imageUrl: "assets/cat_liqueurs.png" },
    { id: 'cat_cocktails', name: { sr: 'Kokteli & Mešana Pića', en: 'Cocktails & Mixed Drinks' }, type: CategoryType.ALCOHOL, order: 29, imageUrl: "assets/cat_cocktails.png" },
  ],
  items: [
    // DORUČAK
    {
      id: 'd1', categoryId: 'cat_dorucak',
      name: { sr: 'Tortilla Omlet Šunka', en: 'Tortilla Omelette Ham' },
      description: { sr: 'Tortilja, jaja, gauda, sir, paradajz, zelena salata, šunka.', en: 'Tortilla, eggs, gouda, cheese, tomato, lettuce, ham.' },
      price: 410, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd2', categoryId: 'cat_dorucak',
      name: { sr: 'Tortilla Omlet Sv. Pršuta', en: 'Tortilla Omelette Pork Prosciutto' },
      description: { sr: 'Tortilja, jaja, gauda, sir, paradajz, zelena salata, sv. pršuta.', en: 'Tortilla, eggs, gouda, cheese, tomato, lettuce, pork prosciutto.' },
      price: 450, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd3', categoryId: 'cat_dorucak',
      name: { sr: 'Tortilla Omlet Gov. Pršuta', en: 'Tortilla Omelette Beef Prosciutto' },
      description: { sr: 'Tortilja, jaja, gauda, sir, paradajz, zelena salata, gov. pršuta.', en: 'Tortilla, eggs, gouda, cheese, tomato, lettuce, beef prosciutto.' },
      price: 470, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd4', categoryId: 'cat_dorucak',
      name: { sr: 'Tortilla Omlet Čvarci', en: 'Tortilla Omelette Pork Cracklings' },
      description: { sr: 'Tortilja, jaja, čvarci, kravlji sir, ajvar, zelena salata.', en: 'Tortilla, eggs, pork cracklings, cow cheese, ajvar, lettuce.' },
      price: 480, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd5', categoryId: 'cat_dorucak',
      name: { sr: 'Tortilla Omlet Povrće', en: 'Tortilla Omelette Veggie' },
      description: { sr: 'Tortilja, jaja, sveža paprika, crveni luk, šećerac, crveni pasulj, zelena salata.', en: 'Tortilla, eggs, fresh pepper, red onion, sweet corn, red beans, lettuce.' },
      price: 420, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd6', categoryId: 'cat_dorucak',
      name: { sr: 'Lepinja sa kajmakom', en: 'Bun with Clotted Cream (Kajmak)' },
      description: { sr: 'Paradajz, zelena salata.', en: 'Tomato, lettuce.' },
      price: 350, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd7', categoryId: 'cat_dorucak',
      name: { sr: 'Omlet Toscana', en: 'Toscana Omelette' },
      description: { sr: 'Jaja, pančeta, paradajz, feta sir.', en: 'Eggs, pancetta, tomato, feta cheese.' },
      price: 420, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd8', categoryId: 'cat_dorucak',
      name: { sr: 'Omlet', en: 'Omelette' },
      description: { sr: 'Jaja, šunka, gauda, paradajz.', en: 'Eggs, ham, gouda, tomato.' },
      price: 410, currency: 'RSD', isAvailable: true
    },
    {
      id: 'd9', categoryId: 'cat_dorucak',
      name: { sr: 'Omlet sa povrćem', en: 'Veggie Omelette' },
      description: { sr: 'Jaja, šampinjoni, paradajz.', en: 'Eggs, mushrooms, tomato.' },
      price: 420, currency: 'RSD', isAvailable: true
    },

    // SENDVIČI I PREDJELA
    {
      id: 's1', categoryId: 'cat_sendvici',
      name: { sr: 'Toscana Daska (Meze 350g)', en: 'Toscana Board (Appetizer 350g)' },
      description: { sr: 'Goveđa pršuta, svinjska pršuta, kulen, gauda, dimljeni sir, gorgonzola, masline, suvo voće.', en: 'Beef prosciutto, pork prosciutto, spicy salami, gouda, smoked cheese, gorgonzola, olives, dried fruits.' },
      price: 1300, currency: 'RSD', isAvailable: true
    },
    {
      id: 's2', categoryId: 'cat_sendvici',
      name: { sr: 'Daska 4 vrste sira (250g)', en: '4 Cheese Board (250g)' },
      description: { sr: 'Gorgonzola, gauda, dimljeni sir, feta sir, masline.', en: 'Gorgonzola, gouda, smoked cheese, feta cheese, olives.' },
      price: 800, currency: 'RSD', isAvailable: true
    },
    {
      id: 's3', categoryId: 'cat_sendvici',
      name: { sr: 'Masline (100g)', en: 'Olives (100g)' },
      description: { sr: 'Kvalitetne masline.', en: 'Quality olives.' },
      price: 220, currency: 'RSD', isAvailable: true
    },
    {
      id: 's4', categoryId: 'cat_sendvici',
      name: { sr: 'Focaccia', en: 'Focaccia' },
      description: { sr: 'Pizza testo, maslinovo ulje, morska so, origano.', en: 'Pizza dough, olive oil, sea salt, oregano.' },
      price: 200, currency: 'RSD', isAvailable: true
    },
    {
      id: 's5', categoryId: 'cat_sendvici',
      name: { sr: 'Toscana Club Sandwich', en: 'Toscana Club Sandwich' },
      description: { sr: 'Tost hleb, gauda, kajgana, goveđa pršuta, pileće belo, paradajz, majonez, pomfrit, zelena salata.', en: 'Toast bread, gouda, scrambled eggs, beef prosciutto, chicken breast, tomato, mayo, fries, lettuce.' },
      price: 520, currency: 'RSD', isAvailable: true
    },
    {
      id: 's6', categoryId: 'cat_sendvici',
      name: { sr: 'Tortilla Roll Sandwich', en: 'Tortilla Roll Sandwich' },
      description: { sr: 'Marinirana piletina, sveža paprika, crveni luk, paprika, zelena salata.', en: 'Marinated chicken, fresh pepper, red onion, paprika, lettuce.' },
      price: 520, currency: 'RSD', isAvailable: true
    },
    {
      id: 's7', categoryId: 'cat_sendvici',
      name: { sr: 'Chicken Sandwich', en: 'Chicken Sandwich' },
      description: { sr: 'Piletina u kari sosu, neutralna pavlaka, gauda, cherry paradajz, rukola.', en: 'Chicken in curry sauce, heavy cream, gouda, cherry tomato, arugula.' },
      price: 520, currency: 'RSD', isAvailable: true
    },
    {
      id: 's8', categoryId: 'cat_sendvici',
      name: { sr: 'Pizza Sandwich', en: 'Pizza Sandwich' },
      description: { sr: 'Sir gauda, šunka, kulen, svinjska pršuta, goveđa pršuta, pavlaka, origano.', en: 'Gouda, ham, spicy salami, pork prosciutto, beef prosciutto, cream, oregano.' },
      price: 360, currency: 'RSD', isAvailable: true,
      tags: { sr: ['Od 360 do 440 RSD'], en: ['From 360 to 440 RSD'] }
    },
    {
      id: 's9', categoryId: 'cat_sendvici',
      name: { sr: 'Domaći Sandwich', en: 'Homemade Sandwich' },
      description: { sr: 'Sir gauda, šunka, povrće, kulen, tunjevina, svinjska pršuta, goveđa pršuta, zelena salata.', en: 'Gouda, ham, vegetables, spicy salami, tuna, pork prosciutto, beef prosciutto, lettuce.' },
      price: 360, currency: 'RSD', isAvailable: true,
      tags: { sr: ['Od 360 do 440 RSD'], en: ['From 360 to 440 RSD'] }
    },
    {
      id: 's10', categoryId: 'cat_sendvici',
      name: { sr: 'Quesadilla', en: 'Quesadilla' },
      description: { sr: 'Tortilja, piletina, gauda, pavlaka, luk, paprika, šećerac, čili, tartar sos.', en: 'Tortilla, chicken, gouda, cream, onion, pepper, sweet corn, chili, tartar sauce.' },
      price: 490, currency: 'RSD', isAvailable: true
    },
    {
      id: 's11', categoryId: 'cat_sendvici',
      name: { sr: 'Tacos (po izboru)', en: 'Tacos (Choice of Meat)' },
      description: { sr: 'Tortilja, sir gauda, šunka, kulen, svinjska pršuta, pavlaka, paprika, čili, luk ili tartar sos.', en: 'Tortilla, gouda, ham, spicy salami, pork prosciutto, cream, pepper, chili, onion or tartar sauce.' },
      price: 470, currency: 'RSD', isAvailable: true,
      tags: { sr: ['Od 470 do 500 RSD'], en: ['From 470 to 500 RSD'] }
    },
    {
      id: 's12', categoryId: 'cat_sendvici',
      name: { sr: 'Tacos (posno)', en: 'Tacos (Lenten/Vegan)' },
      description: { sr: 'Tortilja, tunjevina, posni sir, pelat, luk, paprika, crveni pasulj, šećerac.', en: 'Tortilla, tuna, vegan cheese, tomato sauce, onion, pepper, red beans, sweet corn.' },
      price: 500, currency: 'RSD', isAvailable: true
    },

    // SLANE PALAČINKE & PANUOZZO
    {
      id: 'sp1', categoryId: 'cat_palacinke_slane',
      name: { sr: 'Zapečena palačinka', en: 'Baked Savory Crepe' },
      description: { sr: 'Sir gauda, šunka, pavlaka, jaje, pečurke.', en: 'Gouda, ham, cream, egg, mushrooms.' },
      price: 440, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sp2', categoryId: 'cat_palacinke_slane',
      name: { sr: 'Slana palačinka', en: 'Savory Crepe' },
      description: { sr: 'Sir gauda, šunka, pavlaka, kečap, majonez.', en: 'Gouda, ham, cream, ketchup, mayo.' },
      price: 350, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sp3', categoryId: 'cat_palacinke_slane',
      name: { sr: 'Pohovana palačinka', en: 'Fried Savory Crepe' },
      description: { sr: 'Sir gauda, šunka, tartar sos.', en: 'Gouda, ham, tartar sauce.' },
      price: 450, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sp4', categoryId: 'cat_palacinke_slane',
      name: { sr: 'La Toscana Tortilla - Roll-Up', en: 'La Toscana Tortilla Roll-Up' },
      description: { sr: 'Tortilja, kobasica, sir gauda, miks salata, pesto sos, pelat, parmezan, cherry.', en: 'Tortilla, sausage, gouda, salad mix, pesto sauce, tomato sauce, parmesan, cherry tomato.' },
      price: 570, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sp5', categoryId: 'cat_palacinke_slane',
      name: { sr: 'Panuozzo Sandwich sa kobasicom', en: 'Panuozzo Sausage Sandwich' },
      description: { sr: 'Lepinja, kobasica, sir gauda, iceberg salata, rukola, cherry, mladi luk, pesto sos.', en: 'Bun, sausage, gouda, iceberg, arugula, cherry tomato, spring onion, pesto sauce.' },
      price: 570, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sp6', categoryId: 'cat_palacinke_slane',
      name: { sr: 'Panuozzo Sandwich Kapreze', en: 'Panuozzo Caprese Sandwich' },
      description: { sr: 'Lepinja, svinjska pršuta, gauda, cherry, rucola, miks salata, pesto sos.', en: 'Bun, pork prosciutto, gouda, cherry tomato, arugula, salad mix, pesto sauce.' },
      price: 550, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sp7', categoryId: 'cat_palacinke_slane',
      name: { sr: 'Panuozzo Sandwich sa piletinom', en: 'Panuozzo Chicken Sandwich' },
      description: { sr: 'Lepinja, piletina, sir gauda, cherry, kisela pavlaka, feferoni, pesto sos.', en: 'Bun, chicken, gouda, cherry tomato, sour cream, peperoncini, pesto sauce.' },
      price: 550, currency: 'RSD', isAvailable: true
    },

    // BURRITO
    {
      id: 'b1', categoryId: 'cat_burrito',
      name: { sr: 'Burrito Toscana Sa Junećim mesom', en: 'Toscana Beef Burrito' },
      description: { sr: 'Tortilja, juneće mleveno meso, jalapeño ljuta papričica, crveni pasulj, šećerac, sveža paprika, crveni luk, šargarepa, iceberg, zelena salata, čili sos, beli luk, kisela pavlaka, limunov sok, sir sos.', en: 'Tortilla, ground beef, jalapeño, red beans, sweet corn, fresh pepper, red onion, carrot, iceberg, lettuce, chili sauce, garlic, sour cream, lemon juice, cheese sauce.' },
      price: 760, currency: 'RSD', isAvailable: true
    },
    {
      id: 'b2', categoryId: 'cat_burrito',
      name: { sr: 'Burrito Toscana Sa Pilećim mesom', en: 'Toscana Chicken Burrito' },
      description: { sr: 'Tortilja, pileće meso, crveni pasulj, jalapeño ljuta papričica, šećerac, sveža paprika, crveni luk, šargarepa, iceberg, zelena salata, čili sos, beli luk, kisela pavlaka, limunov sok, sir sos.', en: 'Tortilla, chicken, red beans, jalapeño, sweet corn, fresh pepper, red onion, carrot, iceberg, lettuce, chili sauce, garlic, sour cream, lemon juice, cheese sauce.' },
      price: 650, currency: 'RSD', isAvailable: true
    },
    {
      id: 'b3', categoryId: 'cat_burrito',
      name: { sr: 'Burrito Toscana Sa Dimljenom svinjskom butkicom', en: 'Toscana Smoked Pork Burrito' },
      description: { sr: 'Tortilja, dimljena svinjska butkica, jalapeño ljuta papričica, crveni pasulj, šećerac, sveža paprika, crveni luk, šargarepa, iceberg, zelena salata, čili sos, beli luk, kisela pavlaka, limunov sok, sir sos.', en: 'Tortilla, smoked pork leg, jalapeño, red beans, sweet corn, fresh pepper, red onion, carrot, iceberg, lettuce, chili sauce, garlic, sour cream, lemon juice, cheese sauce.' },
      price: 630, currency: 'RSD', isAvailable: true
    },

    // PILETINA
    {
      id: 'pi1', categoryId: 'cat_piletina',
      name: { sr: 'Chicken Nuggets - Pileći štapići', en: 'Chicken Nuggets - Chicken Strips' },
      description: { sr: 'Pileći file, pomfrit, tartar sos.', en: 'Chicken fillet, fries, tartar sauce.' },
      price: 560, currency: 'RSD', isAvailable: true
    },
    {
      id: 'pi2', categoryId: 'cat_piletina',
      name: { sr: 'Dimljeni pileći batak (Bez koske)', en: 'Smoked Chicken Drumstick (Boneless)' },
      description: { sr: 'Dim. batak, aromatizovani krompir, marinirani crveni luk, garlic majonez sos, Toskana ljuti sos.', en: 'Smoked drumstick, seasoned potatoes, marinated red onion, garlic mayo, Toscana hot sauce.' },
      price: 670, currency: 'RSD', isAvailable: true
    },

    // PIVSKI MENU
    {
      id: 'be1', categoryId: 'cat_pivski_menu',
      name: { sr: 'Kobaja Toscana 1 Metar (oko 1 kg)', en: 'Toscana Sausage 1 Meter (approx 1kg)' },
      description: { sr: 'Kobasica punjena najkvalitetnijim goveđim i svinjskim mesom i kačkavaljem, aromatizovani krompir, 3 vrste sosa.', en: 'Sausage stuffed with high-quality beef, pork, and cheese, seasoned potatoes, 3 types of sauce.' },
      price: 2650, currency: 'RSD', isAvailable: true
    },
    {
      id: 'be2', categoryId: 'cat_pivski_menu',
      name: { sr: 'Kobaja Toscana po izboru (2 kom - 300 gr)', en: 'Toscana Sausage Choice (2 pcs - 300g)' },
      description: { sr: 'Izbor: Toscana, Toscana Ljuta, Toscana Pivska, Toscana Goveđa Ljuta, Toscana Punjena. Sadrži aromatizovani krompir i soseve.', en: 'Choice: Toscana, Spicy, Beer, Beef Spicy, Stuffed. Includes seasoned potatoes and sauces.' },
      price: 950, currency: 'RSD', isAvailable: true
    },
    {
      id: 'be3', categoryId: 'cat_pivski_menu',
      name: { sr: 'Toskana Kobaja Mix za 2 osobe (oko 600 gr)', en: 'Toscana Sausage Mix for 2 (approx 600g)' },
      description: { sr: 'Miks kobasica (Punjena, Pivska, Goveđa Ljuta, Kobasica), aromatizovani krompir, sosevi.', en: 'Mixed sausages (Stuffed, Beer, Beef Spicy, Original), seasoned potatoes, sauces.' },
      price: 1750, currency: 'RSD', isAvailable: true
    },
    {
      id: 'be4', categoryId: 'cat_pivski_menu',
      name: { sr: 'Toskana Kobaja Mix za 4 osobe (oko 1,2 kg)', en: 'Toscana Sausage Mix for 4 (approx 1.2kg)' },
      description: { sr: 'Dupli miks kobasica, aromatizovani krompir, sosevi.', en: 'Double sausage mix, seasoned potatoes, sauces.' },
      price: 3500, currency: 'RSD', isAvailable: true
    },

    // PIZZA
    {
      id: 'p1', categoryId: 'cat_pizza',
      name: { sr: 'Margherita', en: 'Margherita' },
      description: { sr: 'Pelat, gauda, masline, origano.', en: 'Tomato sauce, gouda, olives, oregano.' },
      price: 460, currency: 'RSD', isAvailable: true,
      tags: { sr: ['460 / 610 / 1400 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p2', categoryId: 'cat_pizza',
      name: { sr: 'Capricciosa', en: 'Capricciosa' },
      description: { sr: 'Pelat, gauda, šunka, pečurke, masline, origano.', en: 'Tomato sauce, gouda, ham, mushrooms, olives, oregano.' },
      price: 500, currency: 'RSD', isAvailable: true,
      tags: { sr: ['500 / 660 / 1450 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p3', categoryId: 'cat_pizza',
      name: { sr: 'Pepperoni', en: 'Pepperoni' },
      description: { sr: 'Pelat, gauda, kulen, ljuta papričica, masline, origano.', en: 'Tomato sauce, gouda, spicy salami, hot pepper, olives, oregano.' },
      price: 570, currency: 'RSD', isAvailable: true,
      tags: { sr: ['570 / 760 / 1650 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p4', categoryId: 'cat_pizza',
      name: { sr: 'Amore Mio', en: 'Amore Mio' },
      description: { sr: 'Pelat, gauda, kulen, slanina, crveni luk, parmezan, rukola, masline, cherry, origano.', en: 'Tomato sauce, gouda, spicy salami, bacon, red onion, parmesan, arugula, olives, cherry tomato, oregano.' },
      price: 710, currency: 'RSD', isAvailable: true,
      tags: { sr: ['710 / 920 / 1700 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p5', categoryId: 'cat_pizza',
      name: { sr: 'Toscana', en: 'Toscana' },
      description: { sr: 'Pelat, gauda, šunka, goveđa pršuta, svinjska pršuta, kulen, slanina, rukola, pečurke, masline, parmezan, cherry, origano.', en: 'Tomato sauce, gouda, ham, beef prosciutto, pork prosciutto, spicy salami, bacon, arugula, mushrooms, olives, parmesan, cherry tomato, oregano.' },
      price: 710, currency: 'RSD', isAvailable: true,
      tags: { sr: ['710 / 990 / 1750 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p6', categoryId: 'cat_pizza',
      name: { sr: 'Tonno', en: 'Tonno' },
      description: { sr: 'Pelat, posni sir, tuna u komadu, paprika, crveni luk, kukuruz šećerac, masline, rukola, origano.', en: 'Tomato sauce, vegan cheese, tuna chunks, pepper, red onion, sweet corn, olives, arugula, oregano.' },
      price: 660, currency: 'RSD', isAvailable: true,
      tags: { sr: ['660 / 890 / 1680 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p7', categoryId: 'cat_pizza',
      name: { sr: 'Vegetariana', en: 'Vegetariana' },
      description: { sr: 'Pelat, posni sir, sveži bosiljak, origano, paprika, crveni luk, tikvice, šećerac, pečurke.', en: 'Tomato sauce, vegan cheese, fresh basil, oregano, pepper, red onion, zucchini, sweet corn, mushrooms.' },
      price: 510, currency: 'RSD', isAvailable: true,
      tags: { sr: ['510 / 700 / 1580 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p8', categoryId: 'cat_pizza',
      name: { sr: 'Calcone Farcito', en: 'Calcone Farcito' },
      description: { sr: 'Pelat, gauda, pavlaka, šunka, pečurke, masline, origano.', en: 'Tomato sauce, gouda, cream, ham, mushrooms, olives, oregano.' },
      price: 550, currency: 'RSD', isAvailable: true,
      tags: { sr: ['550 / 750 RSD'], en: ['Small / Large'] }
    },
    {
      id: 'p9', categoryId: 'cat_pizza',
      name: { sr: 'Proscuito e Funghi', en: 'Proscuito e Funghi' },
      description: { sr: 'Pelat, gauda, goveđa pršuta, pečurke, masline, origano.', en: 'Tomato sauce, gouda, beef prosciutto, mushrooms, olives, oregano.' },
      price: 730, currency: 'RSD', isAvailable: true,
      tags: { sr: ['730 / 1020 / 1850 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p10', categoryId: 'cat_pizza',
      name: { sr: 'Bianca', en: 'Bianca' },
      description: { sr: 'Neutralna pavlaka, krem sir, gauda, konfit belog luka, orasi, masline, rukola.', en: 'Heavy cream, cream cheese, gouda, garlic confit, walnuts, olives, arugula.' },
      price: 510, currency: 'RSD', isAvailable: true,
      tags: { sr: ['510 / 690 / 1600 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p11', categoryId: 'cat_pizza',
      name: { sr: 'Con Pollo', en: 'Con Pollo' },
      description: { sr: 'Pelat, gauda, piletina, cherry, masline.', en: 'Tomato sauce, gouda, chicken, cherry tomato, olives.' },
      price: 580, currency: 'RSD', isAvailable: true,
      tags: { sr: ['580 / 780 / 1650 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p12', categoryId: 'cat_pizza',
      name: { sr: 'Quattro Formaggi', en: 'Quattro Formaggi' },
      description: { sr: '(4 VRSTE SIRA) Pelat, sir gauda, sir gorgonzola, krem sir, dimljeni sir, parmezan, rukola, masline.', en: '(4 CHEESE) Tomato sauce, gouda, gorgonzola, cream cheese, smoked cheese, parmesan, arugula, olives.' },
      price: 610, currency: 'RSD', isAvailable: true,
      tags: { sr: ['610 / 820 / 1700 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p13', categoryId: 'cat_pizza',
      name: { sr: 'Salsiccia', en: 'Salsiccia' },
      description: { sr: 'Pelat, gauda, kobasica, mladi luk, crveni luk, masline, origano.', en: 'Tomato sauce, gouda, sausage, spring onion, red onion, olives, oregano.' },
      price: 690, currency: 'RSD', isAvailable: true,
      tags: { sr: ['690 / 960 / 1730 RSD'], en: ['Small / Large / Family'] }
    },
    {
      id: 'p14', categoryId: 'cat_pizza',
      name: { sr: 'Sweet Pizza', en: 'Sweet Pizza' },
      description: { sr: 'Nutella, neutralna pavlaka, banane, sezonsko voće, menta.', en: 'Nutella, heavy cream, bananas, seasonal fruits, mint.' },
      price: 710, currency: 'RSD', isAvailable: true
    },

    // SALATE
    {
      id: 'sl1', categoryId: 'cat_salate',
      name: { sr: 'Caesar', en: 'Caesar' },
      description: { sr: 'Iceberg salata, zelena salata, krckava slanina, grilovana piletina, cezar dresing, krutoni, cherry, parmezan.', en: 'Iceberg lettuce, lettuce, crispy bacon, grilled chicken, caesar dressing, croutons, cherry tomato, parmesan.' },
      price: 550, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sl2', categoryId: 'cat_salate',
      name: { sr: 'Tonno', en: 'Tonno' },
      description: { sr: 'Zelena salata, tunjevina, crveni pasulj, kukuruz šećerac, krastavac, paradajz, krutoni.', en: 'Lettuce, tuna, red beans, sweet corn, cucumber, tomato, croutons.' },
      price: 560, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sl3', categoryId: 'cat_salate',
      name: { sr: 'Grčka', en: 'Greek' },
      description: { sr: 'Paradajz, krastavac, crveni luk, feta sir, masline.', en: 'Tomato, cucumber, red onion, feta cheese, olives.' },
      price: 440, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sl4', categoryId: 'cat_salate',
      name: { sr: 'Toscana', en: 'Toscana' },
      description: { sr: 'Dimljena ćuretina, dimljeni kačkavalj, maslinovo ulje, origano, cherry, rukola.', en: 'Smoked turkey, smoked cheese, olive oil, oregano, cherry tomato, arugula.' },
      price: 590, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sl5', categoryId: 'cat_salate',
      name: { sr: 'Paradajz', en: 'Tomato' },
      description: { sr: 'Svež paradajz.', en: 'Fresh tomato.' },
      price: 250, currency: 'RSD', isAvailable: true
    },
    {
      id: 'sl6', categoryId: 'cat_salate',
      name: { sr: 'Krastavac', en: 'Cucumber' },
      description: { sr: 'Svež krastavac.', en: 'Fresh cucumber.' },
      price: 250, currency: 'RSD', isAvailable: true
    },

    // PASTE
    {
      id: 'ps1', categoryId: 'cat_paste',
      name: { sr: 'Carbonara', en: 'Carbonara' },
      description: { sr: 'Pančeta, neutralna pavlaka, špagete, belo vino, žumance, parmezan.', en: 'Pancetta, heavy cream, spaghetti, white wine, egg yolk, parmesan.' },
      price: 620, currency: 'RSD', isAvailable: true
    },
    {
      id: 'ps2', categoryId: 'cat_paste',
      name: { sr: 'Toscana (Pasta sa pečurkama)', en: 'Toscana (Mushroom Pasta)' },
      description: { sr: 'Ragu od pečuraka, neutralna pavlaka, pene, parmezan.', en: 'Mushroom ragout, heavy cream, penne, parmesan.' },
      price: 640, currency: 'RSD', isAvailable: true
    },
    {
      id: 'ps3', categoryId: 'cat_paste',
      name: { sr: 'Pesto Genovese', en: 'Pesto Genovese' },
      description: { sr: 'Piletina, neutralna pavlaka, pesto sos, pene, parmezan.', en: 'Chicken, heavy cream, pesto sauce, penne, parmesan.' },
      price: 610, currency: 'RSD', isAvailable: true
    },
    {
      id: 'ps4', categoryId: 'cat_paste',
      name: { sr: 'Bolognese', en: 'Bolognese' },
      description: { sr: 'Špagete, bolognese sos, juneće meso, pelat, parmezan, crno vino.', en: 'Spaghetti, bolognese sauce, beef, tomato sauce, parmesan, red wine.' },
      price: 620, currency: 'RSD', isAvailable: true
    },
    {
      id: 'ps5', categoryId: 'cat_paste',
      name: { sr: 'Vegetariana (posno)', en: 'Vegetarian (Lenten)' },
      description: { sr: 'Špagete, tikvice, šampinjoni, pelat, biljni sir, masline.', en: 'Spaghetti, zucchini, mushrooms, tomato sauce, vegan cheese, olives.' },
      price: 550, currency: 'RSD', isAvailable: true
    },

    // GNOCCHI - NJOKI
    {
      id: 'gn1', categoryId: 'cat_njoki',
      name: { sr: 'Njoki Pečurke', en: 'Gnocchi Mushroom' },
      description: { sr: 'Njoke, ragu od pečuraka, neutralna pavlaka, parmezan.', en: 'Gnocchi, mushroom ragout, heavy cream, parmesan.' },
      price: 610, currency: 'RSD', isAvailable: true
    },
    {
      id: 'gn2', categoryId: 'cat_njoki',
      name: { sr: 'Njoki Bolognese', en: 'Gnocchi Bolognese' },
      description: { sr: 'Njoke, bolognese sos, parmezan.', en: 'Gnocchi, bolognese sauce, parmesan.' },
      price: 590, currency: 'RSD', isAvailable: true
    },
    {
      id: 'gn3', categoryId: 'cat_njoki',
      name: { sr: 'Njoki La Toscana (4 vrste sira)', en: 'Gnocchi La Toscana (4 Cheeses)' },
      description: { sr: 'Njoke, gauda, gorgonzola, krem sir, parmezan, neutralna pavlaka.', en: 'Gnocchi, gouda, gorgonzola, cream cheese, parmesan, heavy cream.' },
      price: 610, currency: 'RSD', isAvailable: true
    },

    // MLINCI
    {
      id: 'ml1', categoryId: 'cat_mlinci',
      name: { sr: 'Ćuretina', en: 'Turkey' },
      description: { sr: 'Mlinci, ćuretina, gauda, neutralna pavlaka, kisela pavlaka, pileći bujon, italijanska mešavina.', en: 'Mlinci, turkey, gouda, heavy cream, sour cream, chicken broth, Italian mix.' },
      price: 650, currency: 'RSD', isAvailable: true
    },
    {
      id: 'ml2', categoryId: 'cat_mlinci',
      name: { sr: 'Dimljeni batak i pileće grudi', en: 'Smoked Drumstick & Chicken Breast' },
      description: { sr: 'Mlinci, dimljeni pileći batak i grudi, gauda, neutralna pavlaka, kisela pavlaka, pileći bujon, italijanska mešavina.', en: 'Mlinci, smoked chicken drumstick and breast, gouda, heavy cream, sour cream, chicken broth, Italian mix.' },
      price: 630, currency: 'RSD', isAvailable: true
    },
    {
      id: 'ml3', categoryId: 'cat_mlinci',
      name: { sr: 'Dimljena svinjska butkica', en: 'Smoked Pork Leg' },
      description: { sr: 'Mlinci, dimljena svinjska butkica, gauda, neutralna pavlaka, kisela pavlaka, pileći bujon, italijanska mešavina.', en: 'Mlinci, smoked pork leg, gouda, heavy cream, sour cream, chicken broth, Italian mix.' },
      price: 630, currency: 'RSD', isAvailable: true
    },

    // DODACI ZA PIZZE
    { id: 'ad1', categoryId: 'cat_dodaci_pizza', name: { sr: 'Goveđa pršuta', en: 'Beef Prosciutto' }, description: { sr: 'Dodatak 50g / 100g', en: 'Extra 50g / 100g' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'ad2', categoryId: 'cat_dodaci_pizza', name: { sr: 'Svinjska pršuta', en: 'Pork Prosciutto' }, description: { sr: 'Dodatak 50g / 100g', en: 'Extra 50g / 100g' }, price: 150, currency: 'RSD', isAvailable: true },
    { id: 'ad3', categoryId: 'cat_dodaci_pizza', name: { sr: 'Kulen', en: 'Spicy Salami (Kulen)' }, description: { sr: 'Dodatak 50g / 100g', en: 'Extra 50g / 100g' }, price: 100, currency: 'RSD', isAvailable: true },
    { id: 'ad4', categoryId: 'cat_dodaci_pizza', name: { sr: 'Gorgonzola', en: 'Gorgonzola' }, description: { sr: 'Dodatak 50g', en: 'Extra 50g' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'ad5', categoryId: 'cat_dodaci_pizza', name: { sr: 'Parmezan', en: 'Parmesan' }, description: { sr: 'Dodatak 50g', en: 'Extra 50g' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'ad6', categoryId: 'cat_dodaci_pizza', name: { sr: 'Rukola', en: 'Arugula' }, description: { sr: 'Dodatak 15g / 30g', en: 'Extra 15g / 30g' }, price: 80, currency: 'RSD', isAvailable: true },
    { id: 'ad7', categoryId: 'cat_dodaci_pizza', name: { sr: 'Jaje', en: 'Egg' }, description: { sr: 'Dodatak komad', en: 'Extra piece' }, price: 50, currency: 'RSD', isAvailable: true },
    { id: 'ad8', categoryId: 'cat_dodaci_pizza', name: { sr: 'Pavlaka', en: 'Cream/Sour Cream' }, description: { sr: 'Dodatak 50g', en: 'Extra 50g' }, price: 60, currency: 'RSD', isAvailable: true },
    { id: 'ad9', categoryId: 'cat_dodaci_pizza', name: { sr: 'Gauda', en: 'Gouda' }, description: { sr: 'Dodatak 50g / 100g', en: 'Extra 50g / 100g' }, price: 100, currency: 'RSD', isAvailable: true },
    { id: 'ad10', categoryId: 'cat_dodaci_pizza', name: { sr: 'Sos', en: 'Sauce' }, description: { sr: 'Dodatak 50g', en: 'Extra 50g' }, price: 60, currency: 'RSD', isAvailable: true },
    { id: 'ad11', categoryId: 'cat_dodaci_pizza', name: { sr: 'Hleb', en: 'Bread' }, description: { sr: 'Dodatak', en: 'Extra' }, price: 80, currency: 'RSD', isAvailable: true },
    { id: 'ad12', categoryId: 'cat_dodaci_pizza', name: { sr: 'Maslinke', en: 'Olives' }, description: { sr: 'Dodatak 10 kom.', en: 'Extra 10 pcs' }, price: 110, currency: 'RSD', isAvailable: true },
    { id: 'ad13', categoryId: 'cat_dodaci_pizza', name: { sr: 'Pečurke', en: 'Mushrooms' }, description: { sr: 'Dodatak 30g', en: 'Extra 30g' }, price: 80, currency: 'RSD', isAvailable: true },

    // SLATKI ZALOGAJI
    { id: 'sw1', categoryId: 'cat_slatko', name: { sr: 'Palačinka Toscana', en: 'Toscana Crepe' }, description: { sr: 'Orasi, sladoled, voće.', en: 'Walnuts, ice cream, fruit.' }, price: 380, currency: 'RSD', isAvailable: true },
    { id: 'sw2', categoryId: 'cat_slatko', name: { sr: 'Palačinka Eurokrem', en: 'Eurocream Crepe' }, description: { sr: 'Eurokrem.', en: 'Eurocream.' }, price: 280, currency: 'RSD', isAvailable: true },
    { id: 'sw3', categoryId: 'cat_slatko', name: { sr: 'Palačinka Eurokrem Mix', en: 'Eurocream Mix Crepe' }, description: { sr: 'Eurokrem, plazma, džem, med-orasi.', en: 'Eurocream, plazma, jam, honey-walnuts.' }, price: 280, currency: 'RSD', isAvailable: true },
    { id: 'sw4', categoryId: 'cat_slatko', name: { sr: 'Palačinka Eurokrem Banana', en: 'Eurocream Banana Crepe' }, description: { sr: 'Eurokrem, plazma, banana.', en: 'Eurocream, plazma, banana.' }, price: 290, currency: 'RSD', isAvailable: true },
    { id: 'sw5', categoryId: 'cat_slatko', name: { sr: 'Palačinka Nutella', en: 'Nutella Crepe' }, description: { sr: 'Nutella.', en: 'Nutella.' }, price: 290, currency: 'RSD', isAvailable: true },
    { id: 'sw6', categoryId: 'cat_slatko', name: { sr: 'Palačinka Nutella-Plazma', en: 'Nutella-Plazma Crepe' }, description: { sr: 'Nutella, plazma.', en: 'Nutella, plazma.' }, price: 320, currency: 'RSD', isAvailable: true },
    { id: 'sw7', categoryId: 'cat_slatko', name: { sr: 'Palačinka Nutella-Plazma-Banana', en: 'Nutella-Plazma-Banana Crepe' }, description: { sr: 'Nutella, plazma, banana.', en: 'Nutella, plazma, banana.' }, price: 330, currency: 'RSD', isAvailable: true },
    { id: 'sw8', categoryId: 'cat_slatko', name: { sr: 'Palačinka Kajsija', en: 'Apricot Crepe' }, description: { sr: 'Nutella, vanila krem, kajsija.', en: 'Nutella, vanilla cream, apricot.' }, price: 350, currency: 'RSD', isAvailable: true },
    { id: 'sw9', categoryId: 'cat_slatko', name: { sr: 'Palačinka Malina', en: 'Raspberry Crepe' }, description: { sr: 'Nutella, vanila krem, malina.', en: 'Nutella, vanilla cream, raspberry.' }, price: 350, currency: 'RSD', isAvailable: true },
    { id: 'sw10', categoryId: 'cat_slatko', name: { sr: 'Palačinka Pomorandža', en: 'Orange Crepe' }, description: { sr: 'Nutella, vanila krem, pomorandža, ananas.', en: 'Nutella, vanilla cream, orange, pineapple.' }, price: 350, currency: 'RSD', isAvailable: true },
    { id: 'sw11', categoryId: 'cat_slatko', name: { sr: 'Palačinka Višnja', en: 'Sour Cherry Crepe' }, description: { sr: 'Nutella, vanila krem, višnja.', en: 'Nutella, vanilla cream, sour cherry.' }, price: 370, currency: 'RSD', isAvailable: true },
    { id: 'sw12', categoryId: 'cat_slatko', name: { sr: 'Palačinka Šumsko voće', en: 'Forest Fruit Crepe' }, description: { sr: 'Nutella, vanila krem, šumsko voće.', en: 'Nutella, vanilla cream, forest fruit.' }, price: 360, currency: 'RSD', isAvailable: true },
    { id: 'sw13', categoryId: 'cat_slatko', name: { sr: 'Knedle (porcija 3 kom)', en: 'Dumplings (3 pcs portion)' }, description: { sr: 'Šljive, nutela, maline.', en: 'Plums, nutella, raspberries.' }, price: 390, currency: 'RSD', isAvailable: true },
    { id: 'sw14', categoryId: 'cat_slatko', name: { sr: 'Galete', en: 'Waffles/Galettes' }, description: { sr: 'Tradicionalne galete.', en: 'Traditional galettes.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'sw15', categoryId: 'cat_slatko', name: { sr: 'Muffins', en: 'Muffins' }, description: { sr: 'Malina, nutela.', en: 'Raspberry, nutella.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'sw16', categoryId: 'cat_slatko', name: { sr: 'Cheesecake', en: 'Cheesecake' }, description: { sr: 'Malina, nutela.', en: 'Raspberry, nutella.' }, price: 350, currency: 'RSD', isAvailable: true },
    { id: 'sw17', categoryId: 'cat_slatko', name: { sr: 'Brownies', en: 'Brownies' }, description: { sr: 'Čokoladni brauni.', en: 'Chocolate brownies.' }, price: 350, currency: 'RSD', isAvailable: true },

    // KUPOVI - SLADOLEDI
    { id: 'k1', categoryId: 'cat_kupovi', name: { sr: 'Voćni kup', en: 'Fruit Cup' }, description: { sr: 'Sladoled, voće, šlag, preliv.', en: 'Ice cream, fruit, whipped cream, topping.' }, price: 390, currency: 'RSD', isAvailable: true },
    { id: 'k2', categoryId: 'cat_kupovi', name: { sr: 'Voćna salata', en: 'Fruit Salad' }, description: { sr: 'Sezonsko voće.', en: 'Seasonal fruit.' }, price: 330, currency: 'RSD', isAvailable: true },
    { id: 'k3', categoryId: 'cat_kupovi', name: { sr: 'Jagoda kup', en: 'Strawberry Cup' }, description: { sr: 'Sladoled, jagode, šlag, preliv.', en: 'Ice cream, strawberries, whipped cream, topping.' }, price: 390, currency: 'RSD', isAvailable: true },
    { id: 'k4', categoryId: 'cat_kupovi', name: { sr: 'Jagode sa šlagom', en: 'Strawberries with Whipped Cream' }, description: { sr: 'Vanilla, čokolada, straćatela, jagoda.', en: 'Vanilla, chocolate, stracciatella, strawberry.' }, price: 300, currency: 'RSD', isAvailable: true },
    { id: 'k5', categoryId: 'cat_kupovi', name: { sr: 'Banana Split', en: 'Banana Split' }, description: { sr: 'Sladoled, banana, šlag, preliv.', en: 'Ice cream, banana, whipped cream, topping.' }, price: 390, currency: 'RSD', isAvailable: true },
    { id: 'k6', categoryId: 'cat_kupovi', name: { sr: 'Čoko kup', en: 'Chocolate Cup' }, description: { sr: 'Sladoled, čokolada, šlag, preliv.', en: 'Ice cream, chocolate, whipped cream, topping.' }, price: 390, currency: 'RSD', isAvailable: true },
    { id: 'k7', categoryId: 'cat_kupovi', name: { sr: 'Sladoled teglica', en: 'Ice Cream Jar' }, description: { sr: 'Metropoli Premium sladoled.', en: 'Metropoli Premium ice cream.' }, price: 450, currency: 'RSD', isAvailable: true },

    // TOPLI I HLADNI NAPICI (cat_hot_drinks)
    { id: 'cd1', categoryId: 'cat_hot_drinks', name: { sr: 'Coffe La Toscana', en: 'Coffee La Toscana' }, description: { sr: 'Toping, espresso, mleko.', en: 'Topping, espresso, milk.' }, price: 180, currency: 'RSD', isAvailable: true },
    { id: 'cd2', categoryId: 'cat_hot_drinks', name: { sr: 'Irish Coffe', en: 'Irish Coffee' }, description: { sr: 'Espresso, whiskey, slatka pavlaka, mleko.', en: 'Espresso, whiskey, sweet cream, milk.' }, price: 370, currency: 'RSD', isAvailable: true },
    { id: 'cd3', categoryId: 'cat_hot_drinks', name: { sr: 'Messciano', en: 'Messciano' }, description: { sr: 'Tequila, kalua, espresso, slatka pavlaka.', en: 'Tequila, kahlua, espresso, sweet cream.' }, price: 440, currency: 'RSD', isAvailable: true },
    { id: 'cd4', categoryId: 'cat_hot_drinks', name: { sr: 'Espresso Martini', en: 'Espresso Martini' }, description: { sr: 'Kalua, vodka, espresso.', en: 'Kahlua, vodka, espresso.' }, price: 320, currency: 'RSD', isAvailable: true },
    { id: 'cd5', categoryId: 'cat_hot_drinks', name: { sr: 'Coffee Latte', en: 'Coffee Latte' }, description: { sr: 'Espresso, pena, mleko.', en: 'Espresso, foam, milk.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'cd6', categoryId: 'cat_hot_drinks', name: { sr: 'Capuccino', en: 'Cappuccino' }, description: { sr: 'Kapućino.', en: 'Cappuccino.' }, price: 180, currency: 'RSD', isAvailable: true },
    { id: 'cd7', categoryId: 'cat_hot_drinks', name: { sr: 'Espresso', en: 'Espresso' }, description: { sr: 'Espresso kafa.', en: 'Espresso coffee.' }, price: 160, currency: 'RSD', isAvailable: true },
    { id: 'cd8', categoryId: 'cat_hot_drinks', name: { sr: 'Nescafe', en: 'Nescafe' }, description: { sr: 'Nes kafa.', en: 'Nescafe.' }, price: 180, currency: 'RSD', isAvailable: true },
    { id: 'cd9', categoryId: 'cat_hot_drinks', name: { sr: 'Frape al coffee', en: 'Coffee Frappe' }, description: { sr: 'Hladna kafa sa frapeom.', en: 'Cold coffee frappe.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'cd10', categoryId: 'cat_hot_drinks', name: { sr: 'Ice coffee', en: 'Ice Coffee' }, description: { sr: 'Ledena kafa.', en: 'Ice coffee.' }, price: 270, currency: 'RSD', isAvailable: true },
    { id: 'cd11', categoryId: 'cat_hot_drinks', name: { sr: 'Plazma shake', en: 'Plazma Shake' }, description: { sr: 'Šejk sa plazmom.', en: 'Plazma shake.' }, price: 270, currency: 'RSD', isAvailable: true },
    { id: 'cd12', categoryId: 'cat_hot_drinks', name: { sr: 'Nes 3 u 1', en: 'Nes 3in1' }, description: { sr: 'Nescafe 3 u 1.', en: 'Nescafe 3in1.' }, price: 120, currency: 'RSD', isAvailable: true },
    { id: 'cd13', categoryId: 'cat_hot_drinks', name: { sr: 'Nesquik', en: 'Nesquik' }, description: { sr: 'Čokoladni napitak.', en: 'Chocolate drink.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'cd14', categoryId: 'cat_hot_drinks', name: { sr: 'Topla čokolada', en: 'Hot Chocolate' }, description: { sr: 'Topla čokolada.', en: 'Hot chocolate.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'cd15', categoryId: 'cat_hot_drinks', name: { sr: 'Kafa', en: 'Domestic Coffee' }, description: { sr: 'Domaća kafa.', en: 'Domestic coffee.' }, price: 120, currency: 'RSD', isAvailable: true },
    { id: 'cd16', categoryId: 'cat_hot_drinks', name: { sr: 'Čaj - ALTHAUS', en: 'Tea - ALTHAUS' }, description: { sr: 'Razni ukusi.', en: 'Assorted flavors.' }, price: 150, currency: 'RSD', isAvailable: true },
    { id: 'cd17', categoryId: 'cat_hot_drinks', name: { sr: 'Kakao', en: 'Cocoa' }, description: { sr: 'Topli kakao.', en: 'Hot cocoa.' }, price: 120, currency: 'RSD', isAvailable: true },
    { id: 'cd18', categoryId: 'cat_hot_drinks', name: { sr: 'Kuvano vino', en: 'Mulled Wine' }, description: { sr: 'Kuvano crno ili belo vino.', en: 'Mulled red or white wine.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'cd_mleko', categoryId: 'cat_hot_drinks', name: { sr: 'Dodatak - Mleko', en: 'Add-on - Milk' }, description: { sr: 'Dodatna porcija mleka.', en: 'Extra serving of milk.' }, price: 50, currency: 'RSD', isAvailable: true },
    { id: 'cd_slag', categoryId: 'cat_hot_drinks', name: { sr: 'Dodatak - Šlag', en: 'Add-on - Whipped Cream' }, description: { sr: 'Dodatna porcija šlaga.', en: 'Extra serving of whipped cream.' }, price: 50, currency: 'RSD', isAvailable: true },
    { id: 'cd_med', categoryId: 'cat_hot_drinks', name: { sr: 'Dodatak - Med', en: 'Add-on - Honey' }, description: { sr: 'Dodatna porcija meda.', en: 'Extra serving of honey.' }, price: 50, currency: 'RSD', isAvailable: true },

    // VODE (cat_water)
    { id: 'w1', categoryId: 'cat_water', name: { sr: 'Rosa (negazirana) 0.33', en: 'Rosa (still) 0.33' }, description: { sr: 'Voda 0.33l.', en: 'Water 0.33l.' }, price: 160, currency: 'RSD', isAvailable: true },
    { id: 'w2', categoryId: 'cat_water', name: { sr: 'Rosa (gazirana) 0.33', en: 'Rosa (sparkling) 0.33' }, description: { sr: 'Voda 0.33l.', en: 'Water 0.33l.' }, price: 160, currency: 'RSD', isAvailable: true },
    { id: 'w3', categoryId: 'cat_water', name: { sr: 'Knjaz Miloš 0.1', en: 'Knjaz Milos 0.1' }, description: { sr: 'Gazirana voda.', en: 'Sparkling water.' }, price: 40, currency: 'RSD', isAvailable: true },
    { id: 'w4', categoryId: 'cat_water', name: { sr: 'Knjaz Miloš 0.2', en: 'Knjaz Milos 0.2' }, description: { sr: 'Gazirana voda.', en: 'Sparkling water.' }, price: 80, currency: 'RSD', isAvailable: true },
    { id: 'w5', categoryId: 'cat_water', name: { sr: 'Knjaz Miloš 1L', en: 'Knjaz Milos 1L' }, description: { sr: 'Gazirana voda.', en: 'Sparkling water.' }, price: 400, currency: 'RSD', isAvailable: true },
    { id: 'w6', categoryId: 'cat_water', name: { sr: 'Rosa (negazirana) 0.75', en: 'Rosa (still) 0.75' }, description: { sr: 'Voda 0.75l.', en: 'Water 0.75l.' }, price: 260, currency: 'RSD', isAvailable: true },
    { id: 'w7', categoryId: 'cat_water', name: { sr: 'Rosa (gazirana) 0.75', en: 'Rosa (sparkling) 0.75' }, description: { sr: 'Voda 0.75l.', en: 'Water 0.75l.' }, price: 260, currency: 'RSD', isAvailable: true },

    // BEZALKOHOLNA DRINKS (Gazirana)
    { id: 'sdg1', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Red Bull 0.25', en: 'Red Bull 0.25' }, description: { sr: 'Energetsko piće.', en: 'Energy drink.' }, price: 350, currency: 'RSD', isAvailable: true },
    { id: 'sdg2', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Ultra 0.25', en: 'Ultra 0.25' }, description: { sr: 'Energetsko piće.', en: 'Energy drink.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'sdg3', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Guarana 0.25', en: 'Guarana 0.25' }, description: { sr: 'Energetsko piće.', en: 'Energy drink.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'sdg4', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Orangina 0.25', en: 'Orangina 0.25' }, description: { sr: 'Gusti gazirani sok.', en: 'Premium sparkling orange.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'sdg5', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Cocta 0.25', en: 'Cocta 0.25' }, description: { sr: 'Osvežavajuće piće.', en: 'Refreshing drink.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'sdg6', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Sprite 0.25', en: 'Sprite 0.25' }, description: { sr: 'Osvežavajuće piće.', en: 'Refreshing drink.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'sdg7', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Tonic Water 0.25', en: 'Tonic Water 0.25' }, description: { sr: 'Tonik.', en: 'Tonic water.' }, price: 230, currency: 'RSD', isAvailable: true },
    { id: 'sdg8', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Bitter Lemon 0.25', en: 'Bitter Lemon 0.25' }, description: { sr: 'Biter lemon.', en: 'Bitter lemon.' }, price: 230, currency: 'RSD', isAvailable: true },
    { id: 'sdg9', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Fanta 0.25', en: 'Fanta 0.25' }, description: { sr: 'Fanta.', en: 'Fanta.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'sdg10', categoryId: 'cat_soft_drinks_gaz', name: { sr: 'Coca Cola 0.25', en: 'Coca Cola 0.25' }, description: { sr: 'Coca Cola.', en: 'Coca Cola.' }, price: 220, currency: 'RSD', isAvailable: true },

    // BEZALKOHOLNA DRINKS (Negazirana)
    { id: 'sdn1', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Vitaminska bomba 0.30', en: 'Vitamin Bomb 0.30' }, description: { sr: 'Sveže ceđeni miks.', en: 'Freshly squeezed mix.' }, price: 380, currency: 'RSD', isAvailable: true },
    { id: 'sdn2', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Ceđeni grejp 0.30', en: 'Squeezed Grapefruit 0.30' }, description: { sr: 'Sveže ceđeni grejp.', en: 'Freshly squeezed grapefruit.' }, price: 380, currency: 'RSD', isAvailable: true },
    { id: 'sdn3', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Ceđena narandža 0.30', en: 'Squeezed Orange 0.30' }, description: { sr: 'Sveže ceđena narandža.', en: 'Freshly squeezed orange.' }, price: 350, currency: 'RSD', isAvailable: true },
    { id: 'sdn4', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Limunada 0.30', en: 'Lemonade 0.30' }, description: { sr: 'Domaća limunada.', en: 'Homemade lemonade.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'sdn5', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Ledeni čaj breskva 0.20', en: 'Ice Tea Peach 0.20' }, description: { sr: 'Ledeni čaj.', en: 'Ice tea.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'sdn6', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Cedevita (razni ukusi) 0.25', en: 'Cedevita (assorted) 0.25' }, description: { sr: 'Limeta, Limun, Narandža.', en: 'Lime, Lemon, Orange.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'sdn7', categoryId: 'cat_soft_drinks_neg', name: { sr: 'Next sokovi 0.20', en: 'Next Juices 0.20' }, description: { sr: 'Borovnica, Jabuka, Breskva, Jagoda, Đus.', en: 'Blueberry, Apple, Peach, Strawberry, Orange.' }, price: 220, currency: 'RSD', isAvailable: true },

    // PIVA (Dopunjena iz slika)
    { id: 'beer1', categoryId: 'cat_pivo', name: { sr: 'Guinness 0.33', en: 'Guinness 0.33' }, description: { sr: 'Tamno pivo.', en: 'Stout.' }, price: 400, currency: 'RSD', isAvailable: true },
    { id: 'beer2', categoryId: 'cat_pivo', name: { sr: 'San Miguel 0.33', en: 'San Miguel 0.33' }, description: { sr: 'Lager pivo.', en: 'Lager.' }, price: 300, currency: 'RSD', isAvailable: true },
    { id: 'beer3', categoryId: 'cat_pivo', name: { sr: 'Erdinger (pšenično) 0.33', en: 'Erdinger (wheat) 0.33' }, description: { sr: 'Pšenično pivo.', en: 'Wheat beer.' }, price: 370, currency: 'RSD', isAvailable: true },
    { id: 'beer4', categoryId: 'cat_pivo', name: { sr: 'Kronenbourg (pšenično) 0.33', en: 'Kronenbourg (wheat) 0.33' }, description: { sr: 'Pšenično pivo.', en: 'Wheat beer.' }, price: 270, currency: 'RSD', isAvailable: true },
    { id: 'beer5', categoryId: 'cat_pivo', name: { sr: 'Carlsberg 0.25', en: 'Carlsberg 0.25' }, description: { sr: 'Lager pivo.', en: 'Lager.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'beer6', categoryId: 'cat_pivo', name: { sr: 'Tuborg 0.33', en: 'Tuborg 0.33' }, description: { sr: 'Lager pivo.', en: 'Lager.' }, price: 240, currency: 'RSD', isAvailable: true },
    { id: 'beer7', categoryId: 'cat_pivo', name: { sr: 'Somersby 0.33', en: 'Somersby 0.33' }, description: { sr: 'Jabuka, Kruška, Kupina.', en: 'Apple, Pear, Blackberry.' }, price: 300, currency: 'RSD', isAvailable: true },
    { id: 'beer8', categoryId: 'cat_pivo', name: { sr: 'Lav premium 0.33', en: 'Lav premium 0.33' }, description: { sr: 'Lager pivo.', en: 'Lager.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'beer9', categoryId: 'cat_pivo', name: { sr: 'Budweiser 0.33', en: 'Budweiser 0.33' }, description: { sr: 'Lager pivo.', en: 'Lager.' }, price: 280, currency: 'RSD', isAvailable: true },
    { id: 'beer10', categoryId: 'cat_pivo', name: { sr: 'Budweiser dark 0.33', en: 'Budweiser dark 0.33' }, description: { sr: 'Tamno pivo.', en: 'Dark lager.' }, price: 280, currency: 'RSD', isAvailable: true },
    { id: 'beer11', categoryId: 'cat_pivo', name: { sr: 'Točeno Tuborg 0.33', en: 'Draft Tuborg 0.33' }, description: { sr: 'Sveže točeno.', en: 'Freshly tapped.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'beer12', categoryId: 'cat_pivo', name: { sr: 'Točeno Tuborg 0.50', en: 'Draft Tuborg 0.50' }, description: { sr: 'Sveže točeno.', en: 'Freshly tapped.' }, price: 240, currency: 'RSD', isAvailable: true },
    { id: 'beer13', categoryId: 'cat_pivo', name: { sr: 'Točeno Tuborg 1 Lit.', en: 'Draft Tuborg 1 Lit.' }, description: { sr: 'Bokal piva.', en: 'Pitcher.' }, price: 480, currency: 'RSD', isAvailable: true },

    // ŽESTOKA DOMAĆA (cat_zestina_domaca)
    { id: 'zd1', categoryId: 'cat_zestina_domaca', name: { sr: 'Viljamovka 0.03', en: 'Viljamovka 0.03' }, description: { sr: 'Kruška.', en: 'Pear rakija.' }, price: 240, currency: 'RSD', isAvailable: true },
    { id: 'zd2', categoryId: 'cat_zestina_domaca', name: { sr: 'Vinjak 5 0.03', en: 'Vinjak 5 0.03' }, description: { sr: 'Domaći konjak.', en: 'Domestic brandy.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'zd3', categoryId: 'cat_zestina_domaca', name: { sr: 'Vinjak 0.03', en: 'Vinjak 0.03' }, description: { sr: 'Domaći vinjak.', en: 'Domestic brandy.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd4', categoryId: 'cat_zestina_domaca', name: { sr: 'Vodka 0.03', en: 'Vodka 0.03' }, description: { sr: 'Domaća vodka.', en: 'Domestic vodka.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd5', categoryId: 'cat_zestina_domaca', name: { sr: 'Vermut 0.03', en: 'Vermouth 0.03' }, description: { sr: 'Domaći vermut.', en: 'Domestic vermouth.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd6', categoryId: 'cat_zestina_domaca', name: { sr: 'Gorki list 0.03', en: 'Gorki list 0.03' }, description: { sr: 'Biljni liker.', en: 'Herbal liqueur.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd7', categoryId: 'cat_zestina_domaca', name: { sr: 'Loza 0.03', en: 'Loza 0.03' }, description: { sr: 'Rakija od grožđa.', en: 'Grape rakija.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd8', categoryId: 'cat_zestina_domaca', name: { sr: 'Dunjevača 0.03', en: 'Quince Rakija 0.03' }, description: { sr: 'Rakija od dunje.', en: 'Quince rakija.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd9', categoryId: 'cat_zestina_domaca', name: { sr: 'Kajsijevača 0.03', en: 'Apricot Rakija 0.03' }, description: { sr: 'Rakija od kajsije.', en: 'Apricot rakija.' }, price: 190, currency: 'RSD', isAvailable: true },
    { id: 'zd10', categoryId: 'cat_zestina_domaca', name: { sr: 'Domaća rakija - Zlatna kap 0.03', en: 'Domestic Rakija - Zlatna kap 0.03' }, description: { sr: 'Šljiva.', en: 'Plum rakija.' }, price: 190, currency: 'RSD', isAvailable: true },

    // ŽESTOKA STRANA (cat_zestina_strana)
    { id: 'zs1', categoryId: 'cat_zestina_strana', name: { sr: 'Absolut Vodka 0.03', en: 'Absolut Vodka 0.03' }, description: { sr: 'Strana vodka.', en: 'Foreign vodka.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'zs2', categoryId: 'cat_zestina_strana', name: { sr: 'Smirnof Vodka 0.03', en: 'Smirnoff Vodka 0.03' }, description: { sr: 'Strana vodka.', en: 'Foreign vodka.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'zs3', categoryId: 'cat_zestina_strana', name: { sr: 'Finlandia Vodka 0.03', en: 'Finlandia Vodka 0.03' }, description: { sr: 'Strana vodka.', en: 'Foreign vodka.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'zs4', categoryId: 'cat_zestina_strana', name: { sr: 'Keglevich Vodka 0.03', en: 'Keglevich Vodka 0.03' }, description: { sr: 'Dinja, Breskva, Jagoda.', en: 'Melon, Peach, Strawberry.' }, price: 220, currency: 'RSD', isAvailable: true },
    { id: 'zs5', categoryId: 'cat_zestina_strana', name: { sr: 'Tequila 0.03', en: 'Tequila 0.03' }, description: { sr: 'Tekila.', en: 'Tequila.' }, price: 240, currency: 'RSD', isAvailable: true },
    { id: 'zs6', categoryId: 'cat_zestina_strana', name: { sr: 'Bakardi 0.03', en: 'Bacardi 0.03' }, description: { sr: 'Rum.', en: 'Rum.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'zs7', categoryId: 'cat_zestina_strana', name: { sr: 'Jegermeister 0.03', en: 'Jägermeister 0.03' }, description: { sr: 'Biljni liker.', en: 'Herbal liqueur.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'zs8', categoryId: 'cat_zestina_strana', name: { sr: 'Campari 0.03', en: 'Campari 0.03' }, description: { sr: 'Aperitiv.', en: 'Aperitif.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'zs9', categoryId: 'cat_zestina_strana', name: { sr: 'Martini 0.03', en: 'Martini 0.03' }, description: { sr: 'Vermut.', en: 'Vermouth.' }, price: 250, currency: 'RSD', isAvailable: true },
    { id: 'zs10', categoryId: 'cat_zestina_strana', name: { sr: 'Medovača 0.03', en: 'Honey Rakija 0.03' }, description: { sr: 'Rakija sa medom.', en: 'Honey rakija.' }, price: 200, currency: 'RSD', isAvailable: true },
    { id: 'zs11', categoryId: 'cat_zestina_strana', name: { sr: 'Absinth 0.03', en: 'Absinthe 0.03' }, description: { sr: 'Pelinkovac.', en: 'Absinthe.' }, price: 260, currency: 'RSD', isAvailable: true },

    // VISKI & KONJAK (cat_whiskey_konjak)
    { id: 'wk1', categoryId: 'cat_whiskey_konjak', name: { sr: 'Hennessy 0.03', en: 'Hennessy 0.03' }, description: { sr: 'Konjak.', en: 'Cognac.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'wk2', categoryId: 'cat_whiskey_konjak', name: { sr: 'Martell 0.03', en: 'Martell 0.03' }, description: { sr: 'Konjak.', en: 'Cognac.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'wk3', categoryId: 'cat_whiskey_konjak', name: { sr: 'Courvoisier 0.03', en: 'Courvoisier 0.03' }, description: { sr: 'Konjak.', en: 'Cognac.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'wk4', categoryId: 'cat_whiskey_konjak', name: { sr: 'Chivas Regal 0.03', en: 'Chivas Regal 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 380, currency: 'RSD', isAvailable: true },
    { id: 'wk5', categoryId: 'cat_whiskey_konjak', name: { sr: 'Jack Daniels 0.03', en: 'Jack Daniels 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 380, currency: 'RSD', isAvailable: true },
    { id: 'wk6', categoryId: 'cat_whiskey_konjak', name: { sr: 'Johnny Walker Black 0.03', en: 'Johnny Walker Black 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 380, currency: 'RSD', isAvailable: true },
    { id: 'wk7', categoryId: 'cat_whiskey_konjak', name: { sr: 'Jim Bim 0.03', en: 'Jim Beam 0.03' }, description: { sr: 'Burbon.', en: 'Bourbon.' }, price: 260, currency: 'RSD', isAvailable: true },
    { id: 'wk8', categoryId: 'cat_whiskey_konjak', name: { sr: 'Jameson 0.03', en: 'Jameson 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 290, currency: 'RSD', isAvailable: true },
    { id: 'wk9', categoryId: 'cat_whiskey_konjak', name: { sr: 'J.B. 0.03', en: 'J&B 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 260, currency: 'RSD', isAvailable: true },
    { id: 'wk10', categoryId: 'cat_whiskey_konjak', name: { sr: 'Johnny Walker Red Label 0.03', en: 'Johnny Walker Red Label 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 260, currency: 'RSD', isAvailable: true },
    { id: 'wk11', categoryId: 'cat_whiskey_konjak', name: { sr: 'Ballantines 0.03', en: 'Ballantines 0.03' }, description: { sr: 'Viski.', en: 'Whiskey.' }, price: 260, currency: 'RSD', isAvailable: true },

    // LIKERI (cat_likeri)
    { id: 'l1', categoryId: 'cat_likeri', name: { sr: 'Baileys 0.03', en: 'Baileys 0.03' }, description: { sr: 'Krem liker.', en: 'Cream liqueur.' }, price: 320, currency: 'RSD', isAvailable: true },
    { id: 'l2', categoryId: 'cat_likeri', name: { sr: 'Malibu 0.03', en: 'Malibu 0.03' }, description: { sr: 'Liker od kokosa.', en: 'Coconut liqueur.' }, price: 320, currency: 'RSD', isAvailable: true },
    { id: 'l3', categoryId: 'cat_likeri', name: { sr: 'Amareto 0.03', en: 'Amaretto 0.03' }, description: { sr: 'Liker od badema.', en: 'Almond liqueur.' }, price: 270, currency: 'RSD', isAvailable: true },
    { id: 'l4', categoryId: 'cat_likeri', name: { sr: 'Višnja 0.05', en: 'Cherry Liqueur 0.05' }, description: { sr: 'Voćni liker.', en: 'Fruit liqueur.' }, price: 220, currency: 'RSD', isAvailable: true },

    // KOKTELI & MEŠANA PIĆA (cat_cocktails)
    { id: 'ck1', categoryId: 'cat_cocktails', name: { sr: 'Mojito', en: 'Mojito' }, description: { sr: 'Bacardy, nana, limeta, kisela kiselina.', en: 'Bacardi, mint, lime, sparkling water.' }, price: 500, currency: 'RSD', isAvailable: true },
    { id: 'ck2', categoryId: 'cat_cocktails', name: { sr: 'Long Island', en: 'Long Island' }, description: { sr: 'Bacardy, triple sec, vodka, tequila, gin.', en: 'Bacardi, triple sec, vodka, tequila, gin.' }, price: 520, currency: 'RSD', isAvailable: true },
    { id: 'ck3', categoryId: 'cat_cocktails', name: { sr: 'Sex on the Beach', en: 'Sex on the Beach' }, description: { sr: 'Vodka, archers, đus, grenadin.', en: 'Vodka, archers, orange juice, grenadine.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'ck4', categoryId: 'cat_cocktails', name: { sr: 'Cosmopolitan', en: 'Cosmopolitan' }, description: { sr: 'Vodka, triple sec, borovnica, limun.', en: 'Vodka, triple sec, blueberry, lemon.' }, price: 500, currency: 'RSD', isAvailable: true },
    { id: 'ck5', categoryId: 'cat_cocktails', name: { sr: 'Blue Laguna', en: 'Blue Lagoon' }, description: { sr: 'Vodka, blue curacao, limun, sprite.', en: 'Vodka, blue curacao, lemon, sprite.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'ck6', categoryId: 'cat_cocktails', name: { sr: 'Tom Colins', en: 'Tom Collins' }, description: { sr: 'Gin, triple sec, limun, kisela.', en: 'Gin, triple sec, lemon, sparkling water.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'ck7', categoryId: 'cat_cocktails', name: { sr: 'Campari French Kiss', en: 'Campari French Kiss' }, description: { sr: 'Campari, triple sec, đus, limun.', en: 'Campari, triple sec, orange juice, lemon.' }, price: 520, currency: 'RSD', isAvailable: true },
    { id: 'ck8', categoryId: 'cat_cocktails', name: { sr: 'B-52', en: 'B-52' }, description: { sr: 'Kalua, baileys, triple sec.', en: 'Kahlua, baileys, triple sec.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'ck9', categoryId: 'cat_cocktails', name: { sr: 'Aperol Spric', en: 'Aperol Spritz' }, description: { sr: 'Aperol, penušavo vino, kisela voda.', en: 'Aperol, sparkling wine, sparkling water.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'ck10', categoryId: 'cat_cocktails', name: { sr: 'Blue Frog', en: 'Blue Frog' }, description: { sr: 'Bacardy, triple sec, tequila, gin, blue curacao, red bull, vodka, limun.', en: 'Bacardi, triple sec, tequila, gin, blue curacao, red bull, vodka, lemon.' }, price: 1000, currency: 'RSD', isAvailable: true },
    { id: 'ck11', categoryId: 'cat_cocktails', name: { sr: 'Whiskey-amareto', en: 'Whiskey-amaretto' }, description: { sr: 'Mikis viskija i amatera.', en: 'Mix of whiskey and amaretto.' }, price: 450, currency: 'RSD', isAvailable: true },
    { id: 'ck12', categoryId: 'cat_cocktails', name: { sr: 'Vodka martini', en: 'Vodka martini' }, description: { sr: 'Vodka i martini.', en: 'Vodka and martini.' }, price: 430, currency: 'RSD', isAvailable: true },
    { id: 'ck13', categoryId: 'cat_cocktails', name: { sr: 'Gin-sec sok', en: 'Gin-juice' }, description: { sr: 'Tonic, Biter, Jabuka.', en: 'Tonic, Bitter, Apple.' }, price: 280, currency: 'RSD', isAvailable: true },

  ]
};

