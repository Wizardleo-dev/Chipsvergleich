const chips = [
  {
    id: 'lorenz-crunchips-paprika',
    brand: 'Lorenz',
    name: 'Crunchips Paprika',
    description: 'Klassische Kartoffelchips mit würziger Paprikanote.',
    image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '538 kcal', fett: '33 g', gesaettigteFettsaeuren: '3.2 g', kohlenhydrate: '50 g', zucker: '1.6 g', eiweiss: '6.2 g', salz: '1.4 g' }
  },
  {
    id: 'lorenz-crunchips-ungarisch',
    brand: 'Lorenz',
    name: 'Crunchips Ungarisch',
    description: 'Knusprige Chips mit ungarischer Würzmischung.',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '536 kcal', fett: '33 g', gesaettigteFettsaeuren: '3.1 g', kohlenhydrate: '51 g', zucker: '1.7 g', eiweiss: '6.0 g', salz: '1.5 g' }
  },
  {
    id: 'lays-paprika',
    brand: "Lay's",
    name: "Lay's Paprika",
    description: 'Beliebte Paprika-Chips mit leichter Süße.',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '532 kcal', fett: '32 g', gesaettigteFettsaeuren: '3.0 g', kohlenhydrate: '52 g', zucker: '1.5 g', eiweiss: '6.3 g', salz: '1.3 g' }
  },
  {
    id: 'lays-salt',
    brand: "Lay's",
    name: "Lay's Salted",
    description: 'Klassisch gesalzene Kartoffelchips.',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '531 kcal', fett: '31 g', gesaettigteFettsaeuren: '2.9 g', kohlenhydrate: '53 g', zucker: '0.7 g', eiweiss: '6.4 g', salz: '1.2 g' }
  },
  {
    id: 'pringles-original',
    brand: 'Pringles',
    name: 'Pringles Original',
    description: 'Stapelchips mit mild-salzigem Geschmack.',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '534 kcal', fett: '33 g', gesaettigteFettsaeuren: '2.9 g', kohlenhydrate: '56 g', zucker: '1.1 g', eiweiss: '4.8 g', salz: '1.3 g' }
  },
  {
    id: 'pringles-paprika',
    brand: 'Pringles',
    name: 'Pringles Paprika',
    description: 'Stapelchips mit pikantem Paprika-Geschmack.',
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '536 kcal', fett: '33 g', gesaettigteFettsaeuren: '3.0 g', kohlenhydrate: '55 g', zucker: '2.2 g', eiweiss: '4.7 g', salz: '1.4 g' }
  },
  {
    id: 'funny-frisch-ungarisch',
    brand: 'funny-frisch',
    name: 'Chipsfrisch Ungarisch',
    description: 'Der deutsche Klassiker mit intensiver Würze.',
    image: 'https://images.unsplash.com/photo-1619985632461-f33748ef8c69?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '539 kcal', fett: '34 g', gesaettigteFettsaeuren: '3.3 g', kohlenhydrate: '50 g', zucker: '1.8 g', eiweiss: '6.1 g', salz: '1.5 g' }
  },
  {
    id: 'funny-frisch-oriental',
    brand: 'funny-frisch',
    name: 'Chipsfrisch Oriental',
    description: 'Orientalisch gewürzt mit leicht süßlicher Note.',
    image: 'https://images.unsplash.com/photo-1576777647209-e8733d7b851d?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '541 kcal', fett: '34 g', gesaettigteFettsaeuren: '3.2 g', kohlenhydrate: '50 g', zucker: '2.0 g', eiweiss: '6.0 g', salz: '1.4 g' }
  },
  {
    id: 'kesselchips-salz-pfeffer',
    brand: 'funny-frisch',
    name: 'Kessel Chips Salz & Pfeffer',
    description: 'Dicker geschnittene Kesselchips mit Pfefferkick.',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '529 kcal', fett: '31 g', gesaettigteFettsaeuren: '2.8 g', kohlenhydrate: '54 g', zucker: '1.3 g', eiweiss: '6.5 g', salz: '1.2 g' }
  },
  {
    id: 'chio-red-paprika',
    brand: 'Chio',
    name: 'Chio Chips Red Paprika',
    description: 'Kräftiger Paprika-Geschmack und extra Crunch.',
    image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '535 kcal', fett: '32 g', gesaettigteFettsaeuren: '3.1 g', kohlenhydrate: '52 g', zucker: '1.4 g', eiweiss: '6.2 g', salz: '1.4 g' }
  },
  {
    id: 'chio-salt',
    brand: 'Chio',
    name: 'Chio Chips Salted',
    description: 'Einfach salzig, klassisch und knusprig.',
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '533 kcal', fett: '32 g', gesaettigteFettsaeuren: '3.0 g', kohlenhydrate: '52 g', zucker: '0.8 g', eiweiss: '6.3 g', salz: '1.2 g' }
  },
  {
    id: 'tyrrells-sea-salt',
    brand: 'Tyrrells',
    name: 'Tyrrells Sea Salted',
    description: 'Premium-Chips mit Meersalz aus England.',
    image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '516 kcal', fett: '28 g', gesaettigteFettsaeuren: '2.4 g', kohlenhydrate: '58 g', zucker: '0.6 g', eiweiss: '6.7 g', salz: '1.1 g' }
  },
  {
    id: 'doritos-nacho-cheese',
    brand: 'Doritos',
    name: 'Doritos Nacho Cheese',
    description: 'Maischips mit käsewürziger Nacho-Note.',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '496 kcal', fett: '24 g', gesaettigteFettsaeuren: '2.7 g', kohlenhydrate: '62 g', zucker: '2.5 g', eiweiss: '6.0 g', salz: '1.7 g' }
  },
  {
    id: 'doritos-sweet-chili',
    brand: 'Doritos',
    name: 'Doritos Sweet Chili Pepper',
    description: 'Maischips mit süß-scharfer Würzmischung.',
    image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=900&q=60',
    nutrition: { energie: '492 kcal', fett: '23 g', gesaettigteFettsaeuren: '2.5 g', kohlenhydrate: '63 g', zucker: '6.0 g', eiweiss: '5.8 g', salz: '1.8 g' }
  }
];

const nutritionLabels = {
  energie: 'Energie',
  fett: 'Fett',
  gesaettigteFettsaeuren: 'ges. Fettsäuren',
  kohlenhydrate: 'Kohlenhydrate',
  zucker: 'Zucker',
  eiweiss: 'Eiweiß',
  salz: 'Salz'
};

const searchInput = document.querySelector('#searchInput');
const brandMenu = document.querySelector('#brandMenu');
const chipsGrid = document.querySelector('#chipsGrid');
const resultTitle = document.querySelector('#resultTitle');
const resultCount = document.querySelector('#resultCount');
const template = document.querySelector('#chipCardTemplate');

let selectedBrand = 'Alle Marken';
let currentQuery = '';

const brands = ['Alle Marken', ...new Set(chips.map((chip) => chip.brand))];

function createBrandButtons() {
  brands.forEach((brand) => {
    const button = document.createElement('button');
    button.className = 'brand-btn';
    button.type = 'button';
    button.textContent = brand;
    button.addEventListener('click', () => {
      selectedBrand = brand;
      render();
    });
    brandMenu.appendChild(button);
  });
}

function filteredChips() {
  return chips.filter((chip) => {
    const brandMatch = selectedBrand === 'Alle Marken' || chip.brand === selectedBrand;
    const queryMatch = [chip.name, chip.brand].some((text) => text.toLowerCase().includes(currentQuery));
    return brandMatch && queryMatch;
  });
}

function render() {
  const visible = filteredChips();
  chipsGrid.innerHTML = '';

  for (const button of brandMenu.querySelectorAll('.brand-btn')) {
    button.classList.toggle('active', button.textContent === selectedBrand);
  }

  resultTitle.textContent = selectedBrand === 'Alle Marken' ? 'Alle bekannten Sorten' : `Marke: ${selectedBrand}`;
  resultCount.textContent = `${visible.length} Sorten gefunden`;

  visible.forEach((chip) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector('.chip-image').src = chip.image;
    card.querySelector('.chip-image').alt = `${chip.name} von ${chip.brand}`;
    card.querySelector('.brand-pill').textContent = chip.brand;
    card.querySelector('.chip-name').textContent = chip.name;
    card.querySelector('.chip-description').textContent = chip.description;

    const select = card.querySelector('.rating-select');
    const ratingKey = `rating:${chip.id}`;
    select.value = localStorage.getItem(ratingKey) ?? '';
    select.addEventListener('change', () => {
      localStorage.setItem(ratingKey, select.value);
    });

    const nutritionGrid = card.querySelector('.nutrition-grid');
    Object.entries(nutritionLabels).forEach(([key, label]) => {
      const dt = document.createElement('dt');
      dt.textContent = label;
      const dd = document.createElement('dd');
      dd.textContent = chip.nutrition[key];
      nutritionGrid.append(dt, dd);
    });

    chipsGrid.appendChild(card);
  });

  if (!visible.length) {
    chipsGrid.innerHTML = '<p>Keine Sorten gefunden. Bitte Suchbegriff oder Marke anpassen.</p>';
  }
}

searchInput.addEventListener('input', (event) => {
  currentQuery = event.target.value.trim().toLowerCase();
  render();
});

createBrandButtons();
render();
