// --- Pomocné ---------------------------------------------------------------
const $ = (id) => document.getElementById(id);
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// --- Normalizácia a tvorba kľúčov ------------------------------------------
const MAP = { 'múka': 'muka', 'vajíčka': 'vajcia', 'olej': 'olej', 'mliečko': 'mlieko' };
function normWord(w) {
  const s = String(w || '').toLowerCase().trim();
  return (MAP[s] || s)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // odstráni diakritiku
}
function keyFrom(list) {
  return list.map(normWord).filter(Boolean).sort().join(',');
}

// --- Stav -------------------------------------------------------------------
let RECIPE_DB = {}; // načítaný JSON

// --- Načítanie lokálneho JSON pri štarte -----------------------------------
(async function loadDB() {
  try {
    const res = await fetch('./data/recipes.json', { cache: 'no-store' });
    if (res.ok) {
      RECIPE_DB = await res.json();
      console.log('Načítané recepty:', Object.keys(RECIPE_DB).length);
    }
  } catch (e) {
    console.warn('Nepodarilo sa načítať recipes.json', e);
  }
})();

// --- Vyhľadanie receptu -----------------------------------------------------
function findRecipeByIngredients(inputList) {
  const clean = inputList.map(normWord);
  const exactKey = keyFrom(clean);
  if (RECIPE_DB[exactKey]) return RECIPE_DB[exactKey];

  // približné hľadanie: prienik ingrediencií
  let best = null, bestScore = 0;
  const setIn = new Set(clean);
  for (const key of Object.keys(RECIPE_DB)) {
    const parts = key.split(',');
    const score = parts.filter(p => setIn.has(p)).length;
    if (score > bestScore) { bestScore = score; best = key; }
  }
  if (best && bestScore > 0) return RECIPE_DB[best];
  return null;
}

// --- Mock recept (fallback) -------------------------------------------------
function mockRecipe(ings) {
  const baseTime = 12 + Math.min(ings.length * 5, 20);
  const ingredients = ings.map((it, i) => ({
    item: it,
    amount: ['podľa chuti', '1 PL', '2 PL', '100 g', '150 g', '200 ml'][i % 6]
  }));
  ingredients.push({ item: 'soľ', amount: 'štipka' });
  ingredients.push({ item: 'olej', amount: '1 PL' });
  const steps = [
    'Rozohrej panvicu s olejom.',
    `Pridaj ${ings.join(', ')} a krátko opeč.`,
    'Osoľ, okoreň a podávaj teplé.'
  ];
  return {
    title: ings.length ? `Rýchla panvička: ${ings.join(', ')}` : 'Jednoduchý recept',
    servings: 2,
    timeMinutes: baseTime,
    ingredients, steps
  };
}

// --- Render -----------------------------------------------------------------
function recipeToHtml(r) {
  return `
    <h2>${escapeHtml(r.title)} <small>• ${r.servings || 2} porcie • ~${Number(r.timeMinutes) || 15} min</small></h2>
    <h3>Ingrediencie</h3>
    <ul class="list">
      ${(r.ingredients || []).map(x => `<li>${escapeHtml(x.item)} — ${escapeHtml(x.amount)}</li>`).join('')}
    </ul>
    <h3>Postup</h3>
    <ol class="list">
      ${(r.steps || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
    </ol>
  `;
}

// --- Prepínanie „papiera“ (wipe efekt) --------------------------------------
const viewForm = $('view-form');
const viewRecipe = $('view-recipe');
const resultEl = $('result');
const paperEl = document.querySelector('.paper');
const statusEl = $('status');
const loaderEl = $('loader');

function setLoading(on) { loaderEl.classList.toggle('hidden', !on); }

function showRecipe(html) {
  paperEl.classList.add('switching');
  viewForm.classList.add('wiping-out');

  setTimeout(() => {
    resultEl.innerHTML = html;
    viewRecipe.classList.remove('hidden');
    viewRecipe.classList.add('wiping-in');
    viewRecipe.scrollTop = 0;
    resultEl.scrollIntoView({ block: 'start' });
    document.querySelector('.sheet')?.scrollTo?.(0, 0);
  }, 160);

  setTimeout(() => {
    viewForm.classList.remove('wiping-out');
    viewRecipe.classList.remove('wiping-in');
    viewForm.classList.add('hidden');
    paperEl.classList.remove('switching');
    viewRecipe.scrollTop = 0;
    document.querySelector('.sheet')?.scrollTo?.(0, 0);
  }, 460);
}

function showForm() {
  viewRecipe.classList.add('hidden');
  viewForm.classList.remove('hidden');
  statusEl.textContent = '';
  setLoading(false);
  viewForm.scrollTop = 0;
  document.querySelector('.sheet')?.scrollTo?.(0, 0);
}

// --- Vstupy -----------------------------------------------------------------
function readIngredients() {
  return ['i1', 'i2', 'i3', 'i4']
    .map(id => $(id).value.trim())
    .filter(Boolean)
    .slice(0, 4);
}

// --- Handler tlačidla (hlavná logika) --------------------------------------
$('gen').onclick = async () => {
  const ings = readIngredients();
  resultEl.innerHTML = '';
  setLoading(true);

  if (ings.length < 1) {
    setLoading(false);
    statusEl.innerHTML = `<span class="bad">Zadaj aspoň 1 ingredienciu.</span>`;
    return;
  }

  try {
    // (A) Skús nájsť v lokálnom JSON (ak chceš zachovať túto logiku)
    const fromDB = findRecipeByIngredients(ings);
    if (fromDB) {
      showRecipe(recipeToHtml(fromDB));
      statusEl.textContent = '';
      return;
    }

    // (B) Inak volaj OpenAI cez Netlify Function
    const res = await fetch('/.netlify/functions/generate-recipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients: ings, lang: 'sk' })
    });

    const raw = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${raw}`);

    const data = JSON.parse(raw);
    showRecipe(recipeToHtml(data));
    statusEl.textContent = '';
  } catch (e) {
    console.error('AI call failed:', e);
    const data = mockRecipe(ings);
    showRecipe(recipeToHtml(data));
    statusEl.textContent = '⚠️ AI fallback: lokálne dáta.';
  } finally {
    setLoading(false);
  }
};

// --- Návrat späť ------------------------------------------------------------
$('edit').onclick = () => {
  setLoading(false);
  showForm();
};
