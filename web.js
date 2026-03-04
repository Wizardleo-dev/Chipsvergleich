import { chips, demoReviews } from './chipsData.js';

const brandMenu = document.getElementById('brandMenu');
const searchInput = document.getElementById('searchInput');
const chipsGrid = document.getElementById('chipsGrid');
const resultTitle = document.getElementById('resultTitle');
const resultCount = document.getElementById('resultCount');
const template = document.getElementById('chipCardTemplate');

const brands = ['Alle', ...new Set(chips.map((chip) => chip.brand))];
let activeBrand = 'Alle';
let currentQuery = '';

function avgRating(chipId) {
  const own = Number(localStorage.getItem(`rating:${chipId}`));
  const community = demoReviews[chipId] ?? [];
  const all = own ? [...community, own] : community;
  const average = all.reduce((sum, r) => sum + r, 0) / all.length;
  return {
    average: all.length ? average.toFixed(1) : '–',
    votes: all.length
  };
}

function createBrandButtons() {
  brandMenu.innerHTML = '';
  brands.forEach((brand) => {
    const btn = document.createElement('button');
    btn.className = 'brand-btn';
    btn.textContent = brand;
    if (brand === activeBrand) btn.classList.add('active');
    btn.addEventListener('click', () => {
      activeBrand = brand;
      createBrandButtons();
      render();
    });
    brandMenu.appendChild(btn);
  });
}

function filteredChips() {
  return chips.filter((chip) => {
    const matchesBrand = activeBrand === 'Alle' || chip.brand === activeBrand;
    const q = `${chip.name} ${chip.brand}`.toLowerCase();
    const matchesSearch = q.includes(currentQuery);
    return matchesBrand && matchesSearch;
  });
}

function render() {
  const visible = filteredChips();
  resultTitle.textContent = activeBrand === 'Alle' ? 'Alle bekannten Sorten' : `${activeBrand} Sorten`;
  resultCount.textContent = `${visible.length} Treffer`;
  chipsGrid.innerHTML = '';

  visible.forEach((chip) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector('.chip-image').src = chip.image;
    card.querySelector('.chip-image').alt = `${chip.name} von ${chip.brand}`;
    card.querySelector('.brand-pill').textContent = chip.brand;
    card.querySelector('.chip-name').textContent = chip.name;
    card.querySelector('.chip-description').textContent = chip.description;

    const ratingStats = avgRating(chip.id);
    card.querySelector('.community-rating').textContent = `${ratingStats.average} / 5 (${ratingStats.votes} Bewertungen)`;

    const select = card.querySelector('.rating-select');
    const key = `rating:${chip.id}`;
    select.value = localStorage.getItem(key) ?? '';
    select.addEventListener('change', () => {
      localStorage.setItem(key, select.value);
      render();
    });

    const nutritionGrid = card.querySelector('.nutrition-grid');
    Object.entries(chip.nutrition).forEach(([keyName, value]) => {
      const dt = document.createElement('dt');
      dt.textContent = keyName;
      const dd = document.createElement('dd');
      dd.textContent = value;
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
