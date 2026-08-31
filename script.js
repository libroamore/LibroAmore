/* ===========================================================
   LibroAmore — navegación interna y datos de ejemplo
   =========================================================== */

function checkTelegramEnvironment() {
    const tg = window.Telegram?.WebApp;
    const isTelegram = !!(tg && tg.initDataUnsafe && tg.initDataUnsafe.user);
    if (!isTelegram) {
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'none';
        const blockedMsg = document.getElementById('blocked-message');
        if (blockedMsg) blockedMsg.style.display = 'flex';
        document.title = 'Solo en Telegram';
        return false;
    }
    const appShell = document.getElementById('appShell');
    if (appShell) appShell.style.display = 'block';
    return true;
}

// ============================================
//  DATOS
// ============================================

const tg = window.Telegram?.WebApp;

const BOOKS = [
  {
    id: "Banging My Birthday Bear",
    title: "Banging My Birthday Bear",
    author: "Holly Wilde",
    series: "Sentient Celebrations",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto Consciente"],
    synopsis: "Pasar su trigésimo cumpleaños con amigas escondidas en las montañas es exactamente lo que quiere. Pero tener una aventura cruda y apasionada con un osito de peluche de tamaño real es exactamente lo que necesita.",
    coverUrl: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
    hue: 340
  },
  {
    id: "Pounded By Poseidon",
    title: "Pounded By Poseidon",
    author: "Thea Masen - Holly Wilde",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto Consciente"],
    synopsis: "Se suponía que ganar el concurso de esculturas de arena de Mountcastle Cove sería el boleto de Isla Moore para superar las acciones destructivas de su padre.",
    coverUrl: "https://m.media-amazon.com/images/I/81NbDUhl0nL._SY425_.jpg",
    hue: 25
  },
  {
    id: "Say My Name",
    title: "Say My Name",
    author: "CJ Raine",
    series: "The Ode To The Peculiar",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Fantasía oscura", "Misterio"],
    synopsis: "Un trato con una demonio es su único camino hacia la libertad.",
    coverUrl: "https://m.media-amazon.com/images/I/81qF3fLWVCL._SY425_.jpg",
    hue: 260
  },
  {
    id: "MONSTROUS",
    title: "MONSTROUS",
    author: "Cora Raven",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Histórico", "Romance", "Retelling"],
    synopsis: "En la Inglaterra victoriana, la botánica Camellia Reed acepta un puesto como asistente de investigación.",
    coverUrl: "https://m.media-amazon.com/images/I/417DqRE5fmL._SY445_SX342_QL70_FMwebp_.jpg",
    hue: 200
  },
  {
    id: "Fervor",
    title: "Fervor",
    author: "Meg Smitherman",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Dark", "Romance", "Fantasía"],
    synopsis: "Midonia, una transportista interplanetaria, se encuentra en una situación delicada.",
    coverUrl: "https://m.media-amazon.com/images/I/41egFhRk3UL._SY445_SX342_FMwebp_.jpg",
    hue: 150
  }
];

const UPCOMING_BOOKS = [
  { id: "upcoming-1", title: "El susurro del océano", author: "Marina Sol", coverUrl: null, hue: 200 },
  { id: "upcoming-2", title: "Bajo la luna de octubre", author: "Luna Ríos", coverUrl: null, hue: 30 }
];

const SCREEN_TITLES = {
  anuncios: "Anuncios",
  libros: "Libros disponibles",
  autores: "Autores",
  extras: "Contenido extra",
  "libro-detail": "Detalle del libro",
  proximos: "Próximos proyectos",
  actualizaciones: "Actualizaciones",
  nsfw: "🔞 NSFW",
  sfw: "🖼️ SFW"
};

// ============================================
//  NAVEGACIÓN
// ============================================

const navStack = ["home"];

window.openScreen = function(name) {
  if (navStack[navStack.length - 1] !== name) navStack.push(name);
  showScreen(name);
};

window.goBack = function() {
  if (navStack.length > 1) navStack.pop();
  showScreen(navStack[navStack.length - 1]);
};

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((el) => {
    el.hidden = el.dataset.screen !== name;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  renderTopbar(name);
  updateTelegramBackButton(name);
}

function renderTopbar(name) {
  const topbar = document.getElementById("topbar");
  if (name === "home") {
    topbar.innerHTML = `<span class="topbar-brand"><svg viewBox="0 0 24 24" style="width:21px;height:21px;"><use href="#icon-book"></use></svg><span>LibroAmore</span></span>`;
  } else {
    const title = SCREEN_TITLES[name] || name;
    topbar.innerHTML = `<div class="topbar-nav"><button class="back-btn" onclick="goBack()">← Volver</button><span class="topbar-title">${title}</span></div>`;
  }
}

if (tg) {
  tg.ready();
  tg.expand();
  try { tg.BackButton.onClick(goBack); } catch (e) {}
}

function updateTelegramBackButton(name) {
  if (!tg || !tg.BackButton) return;
  try { if (name === "home") tg.BackButton.hide(); else tg.BackButton.show(); } catch (e) {}
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

let toastTimer;
window.showToast = function(message) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
};

// ============================================
//  FUNCIONES DE RENDER
// ============================================

function renderBooksGrid() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;
  grid.innerHTML = BOOKS.map((book, i) => `
    <div class="book-card" style="--i:${i}" onclick="openBookDetail('${book.id}')">
      <div class="book-cover"><img src="${book.coverUrl}" alt="${book.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=padding:20px;text-align:center;>📖</div>'"></div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </div>
  `).join('');
}

window.openBookDetail = function(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;
  const detailEl = document.getElementById("bookDetail");
  if (detailEl) {
    detailEl.innerHTML = `<h1>${book.title}</h1><p>${book.synopsis}</p><button onclick="showToast('Descarga disponible pronto')">Descargar</button>`;
  }
  openScreen("libro-detail");
};

function renderReadingOrder() {
  const container = document.getElementById('orderList');
  if (!container) return;
  container.innerHTML = `
    <div class="order-item" onclick="showToast('Libro 1')"><span class="order-number">01</span><div><div>Смертельные клятвы</div><div>НАЧАЛО ИСТОРИИ</div></div><span>✅</span></div>
    <div class="order-item" onclick="showToast('Libro 2')"><span class="order-number">02</span><div><div>Праведные клятвы</div><div>ПРОДОЛЖЕНИЕ</div></div><span>✅</span></div>
  `;
}

function renderUpcomingBooks() {
  const grid = document.getElementById('upcomingGrid');
  if (!grid) return;
  grid.innerHTML = UPCOMING_BOOKS.map(book => `
    <div class="book-card"><div class="book-cover"><div style="padding:20px;text-align:center;">📖</div></div><h3>${book.title}</h3><p>${book.author}</p><span class="status-badge status-soon">Próximo</span></div>
  `).join('');
}

function renderUpdates() {
  const container = document.getElementById('updatesList');
  if (!container) return;
  container.innerHTML = `<div class="update-item"><div><span>v1.0.0</span> <span>30/08/2026</span></div><div>Lanzamiento inicial</div></div>`;
}

// ============================================
//  ILUSTRACIONES
// ============================================

const ILUSTRACIONES = {
  nsfw: [
    { titulo: "Banging My Birthday Bear", autor: "Holly Wilde", imagen: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg" },
    { titulo: "Pounded By Poseidon", autor: "Thea Masen", imagen: "https://m.media-amazon.com/images/I/81NbDUhl0nL._SY425_.jpg" }
  ],
  sfw: [
    { titulo: "El susurro del océano", autor: "Marina Sol", imagen: "https://ejemplo.com/imagen-sfw-1.jpg" }
  ]
};

function mostrarIlustraciones(categoria, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) {
    console.warn('Contenedor no encontrado:', contenedorId);
    return;
  }
  const items = ILUSTRACIONES[categoria] || [];
  contenedor.innerHTML = items.map(item => `
    <div class="book-card" onclick="showToast('${item.titulo} - ${item.autor}')">
      <div class="book-cover"><img src="${item.imagen}" alt="${item.titulo}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=padding:20px;text-align:center;>📖</div>'"></div>
      <h3 class="book-title">${item.titulo}</h3>
      <p class="book-author">${item.autor}</p>
      <span class="status-badge status-soon">Ver</span>
    </div>
  `).join('');
}

// ============================================
//  INICIO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ DOM cargado');
  
  if (!checkTelegramEnvironment()) {
    console.log('❌ No es Telegram');
    return;
  }
  
  console.log('✅ Es Telegram, iniciando app...');
  
  renderTopbar("home");
  renderBooksGrid();
  renderReadingOrder();
  renderUpcomingBooks();
  renderUpdates();
  mostrarIlustraciones('nsfw', 'nsfwGrid');
  mostrarIlustraciones('sfw', 'sfwGrid');
  
  console.log('✅ App iniciada correctamente');
});
