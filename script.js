/* ===========================================================
   LibroAmore — navegación interna y datos de ejemplo
   =========================================================== */

// ============================================
//  VERIFICACIÓN DE ENTORNO (Telegram vs Web)
// ============================================

function checkTelegramEnvironment() {
    const tg = window.Telegram?.WebApp;
    const isTelegram = !!(tg && tg.initDataUnsafe && tg.initDataUnsafe.user);
    
    if (!isTelegram) {
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'none';
        const blockedMsg = document.getElementById('blocked-message');
        if (blockedMsg) {
            blockedMsg.style.display = 'flex';
        }
        document.title = 'Solo en Telegram';
        return false;
    }
    
    const appShell = document.getElementById('appShell');
    if (appShell) appShell.style.display = 'block';
    return true;
}

// ============================================
//  DATOS DE EJEMPLO
// ============================================

const tg = window.Telegram?.WebApp;

/* ---------- Libros disponibles ---------- */
const BOOKS = [
  // ... (tus libros existentes, sin cambios)
];

/* ---------- Libros próximos ---------- */
const UPCOMING_BOOKS = [
  // ... (tus libros próximos, sin cambios)
];

// ============================================
//  ESTADO DE BÚSQUEDA Y ORDEN
// ============================================

let currentSort = 'alpha-asc';
let searchTerm = '';
let searchTermAutores = '';

const SCREEN_TITLES = {
  anuncios: "Anuncios",
  libros: "Libros disponibles",
  autores: "Autores",
  extras: "Contenido extra",
  "libro-detail": "Detalle del libro",
  proximos: "Próximos proyectos",
  actualizaciones: "Actualizaciones",
  nsfw: "🔞 NSFW",
  sfw: "🖼️ SFW",
  "illustration-detail": "Detalle",
  nosotras: "Nosotras",
  "serie-detail": "Detalle de serie"
};

/* ---------- Navegación ---------- */
const navStack = ["home"];

// FUNCIÓN showScreen (definida PRIMERO)
function showScreen(name) {
  document.querySelectorAll(".screen").forEach((el) => {
    el.hidden = el.dataset.screen !== name;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  renderTopbar(name);
  updateTelegramBackButton(name);
  
  // Actualizar barra inferior
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === name);
  });
}

// FUNCIONES DE NAVEGACIÓN
window.openScreen = function(name) {
  if (navStack[navStack.length - 1] !== name) navStack.push(name);
  showScreen(name);
};

window.goBack = function() {
  if (navStack.length > 1) navStack.pop();
  showScreen(navStack[navStack.length - 1]);
};

window.goHome = function() {
  navStack.length = 1;
  navStack[0] = "home";
  showScreen("home");
};

function renderTopbar(name) {
  const topbar = document.getElementById("topbar");
  
  const themeBtn = `
    <button id="themeToggle" onclick="toggleTheme()" style="
      background: rgba(192, 57, 122, 0.12);
      border: 1px solid var(--pink-strong);
      border-radius: 50%;
      width: 38px;
      height: 38px;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-left: 8px;
      color: var(--pink-strong);
    ">🌙</button>
  `;
  
  if (name === "home") {
    topbar.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 4px;">
        <span class="topbar-brand">
          <svg viewBox="0 0 24 24" aria-hidden="true" style="width:24px;height:24px;"><use href="#icon-book"></use></svg>
          <span style="font-family:var(--font-display);font-weight:600;font-size:20px;color:var(--ink);">LibroAmore</span>
        </span>
        ${themeBtn}
      </div>
    `;
  } else {
    const title = SCREEN_TITLES[name] || name;
    topbar.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 4px;">
        <div style="display:flex;align-items:center;gap:8px;overflow:hidden;flex:1;">
          <button class="back-btn" onclick="goBack()" style="display:flex;align-items:center;gap:4px;background:none;border:none;color:var(--pink-ink);font-weight:600;font-size:15px;padding:8px 4px;cursor:pointer;">
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;"><use href="#icon-chevron-left"></use></svg>
            <span>Volver</span>
          </button>
          <span style="font-family:var(--font-display);font-weight:600;font-size:18px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(title)}</span>
        </div>
        ${themeBtn}
      </div>
    `;
  }
  
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const savedTheme = localStorage.getItem('theme');
    btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }
}

/* ---------- Telegram ---------- */
if (tg) {
  tg.ready();
  tg.expand();
  try {
    tg.BackButton.onClick(goBack);
  } catch (e) {}
}

function updateTelegramBackButton(name) {
  if (!tg || !tg.BackButton) return;
  try {
    if (name === "home") tg.BackButton.hide();
    else tg.BackButton.show();
  } catch (e) {}
}

/* ---------- Utilidades ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

let toastTimer;
window.showToast = function(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
};

// ============================================
//  MODO OSCURO
// ============================================

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeToggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    if (btn) btn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    if (btn) btn.textContent = '🌙';
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('themeToggle');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (btn) btn.textContent = '☀️';
  } else {
    if (btn) btn.textContent = '🌙';
  }
}

/* ---------- Portadas ---------- */
function coverMarkup(book, big) {
  if (book.coverUrl) {
    return `<img src="${escapeHtml(book.coverUrl)}" alt="Portada de ${escapeHtml(book.title)}" loading="lazy"
      onerror="bookCoverFallback(this, '${book.id}', ${big ? "true" : "false"})">`;
  }
  return placeholderCoverMarkup(book, big);
}

function placeholderCoverMarkup(book, big) {
  const letter = book.title.trim().charAt(0).toUpperCase();
  return `
    <div class="cover-placeholder${big ? " cover-placeholder--lg" : ""}" style="--hue:${book.hue}">
      <svg class="cover-icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-book"></use></svg>
      <span class="cover-letter">${escapeHtml(letter)}</span>
    </div>
  `;
}

window.bookCoverFallback = function(imgEl, bookId, big) {
  const book = BOOKS.find((b) => b.id === bookId);
  if (!book || !imgEl.parentElement) return;
  imgEl.parentElement.innerHTML = placeholderCoverMarkup(book, big);
};

// ============================================
//  FILTRAR Y ORDENAR LIBROS
// ============================================

function filterBooks() {
  const input = document.getElementById('searchInput');
  searchTerm = input ? input.value.toLowerCase().trim() : '';
  renderBooksGrid();
}

function sortBooks(order) {
  currentSort = order;
  
  // Actualizar botones activos
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const btn = document.getElementById(order === 'alpha-asc' ? 'sortAlphaAsc' : 'sortAlphaDesc');
  if (btn) btn.classList.add('active');
  
  renderBooksGrid();
}

function renderBooksGrid() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;

  // 1. Filtrar libros
  let filtered = BOOKS;
  if (searchTerm) {
    filtered = filtered.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  }

  // 2. Ordenar libros
  if (currentSort === 'alpha-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'alpha-desc') {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  // 3. Renderizar
  grid.innerHTML = filtered.map((book, i) => `
    <button class="book-card" style="--i:${i}" onclick="openBookDetail('${book.id}')">
      <div class="book-cover">${coverMarkup(book, false)}</div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </button>
  `).join('');
}

window.openBookDetail = function(bookId) {
  const book = BOOKS.find((b) => b.id === bookId);
  if (!book) return;
  const detailEl = document.getElementById("bookDetail");
  if (detailEl) {
    detailEl.innerHTML = bookDetailMarkup(book);
  }
  openScreen("libro-detail");
};

function bookDetailMarkup(book) {
  const formats = ["epub", "pdf", "fb2"].map((fmt) => {
    const available = book.status === "Disponible";
    return `
      <button class="format-btn${available ? "" : " format-btn--disabled"}"
        ${available ? `onclick="downloadFormat('${fmt}')"` : "disabled"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-download"></use></svg>
        ${fmt.toUpperCase()}
      </button>
    `;
  }).join("");

  const saved = getReactions(book.id);
  const heartActive = saved.heart ? 'active-heart' : '';
  const starCount = saved.stars || 0;

  return `
    <div class="detail-cover">${coverMarkup(book, true)}</div>
    <h1 class="detail-title">${escapeHtml(book.title)}</h1>
    <p class="detail-author">${escapeHtml(book.author)}</p>
    <div class="detail-badge-row">
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </div>
    <div class="detail-meta">
      <div class="meta-item">
        <span class="meta-label">Serie</span>
        <span class="meta-value">${escapeHtml(book.series || "Único")}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Parte</span>
        <span class="meta-value">${book.part ?? "—"}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Clasificación</span>
        <span class="meta-value">${escapeHtml(book.classification)}</span>
      </div>
    </div>

    <div class="reactions">
      <button class="reaction-btn ${heartActive}" onclick="toggleHeart('${book.id}')">
        <span class="icon">❤️</span>
        <span class="count" id="heart-count-${book.id}">${saved.heart ? '1' : '0'}</span>
      </button>
      <button class="reaction-btn ${starCount > 0 ? 'active-star' : ''}" onclick="openStarSelector('${book.id}')">
        <span class="icon">⭐</span>
        <span class="count" id="star-count-${book.id}">${starCount > 0 ? starCount : '0'}</span>
      </button>
    </div>

    <div class="tag-row">
      ${book.tags.map((tag) => `
        <span class="tag">
          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><use href="#icon-tag"></use></svg>
          ${escapeHtml(tag)}
        </span>
      `).join("")}
    </div>
    <h2 class="detail-subheading">Sinopsis</h2>
    <p class="detail-synopsis">${escapeHtml(book.synopsis)}</p>
    <h2 class="detail-subheading">Descargar</h2>
    <div class="format-row">${formats}</div>
    ${book.status !== "Disponible"
      ? `<p class="detail-note">Este título todavía no está disponible para descarga.</p>`
      : ""}
  `;
}

window.downloadFormat = function(format) {
  showToast(`Este es un libro de ejemplo — el archivo ${format.toUpperCase()} real se habilitará más adelante.`);
};

/* ---------- Orden de lectura (sección Autores) ---------- */
function renderReadingOrder() {
  const container = document.getElementById('orderList');
  if (!container) return;

  const orderIds = [
    'mortal-vows',
    'righteous-vows',
    'treacherous-vows',
    'reckless-vows',
    'wrong-vows'
  ];

  const orderTitles = {
    'mortal-vows': 'Смертельные клятвы',
    'righteous-vows': 'Праведные клятвы',
    'treacherous-vows': 'Коварные клятвы',
    'reckless-vows': 'Безумные клятвы',
    'wrong-vows': 'Неправильные клятвы'
  };

  const subtitles = {
    'mortal-vows': 'НАЧАЛО ИСТОРИИ',
    'righteous-vows': 'ПРОДОЛЖЕНИЕ',
    'treacherous-vows': 'ПРОДОЛЖЕНИЕ',
    'reckless-vows': 'ПРОДОЛЖЕНИЕ',
    'wrong-vows': 'ФИНАЛ СЕРИИ'
  };

  container.innerHTML = orderIds.map((id, index) => {
    const book = BOOKS.find(b => b.id === id);
    const statusText = book && book.status === 'Disponible' ? '✅ перевод завершен' : '⏳ перевод в процессе';
    return `
      <div class="order-item" onclick="openBookDetail('${id}')">
        <span class="order-number">${String(index + 1).padStart(2, '0')}</span>
        <div class="order-info">
          <div class="order-title">${orderTitles[id] || id}</div>
          <div class="order-subtitle">${subtitles[id] || ''}</div>
        </div>
        <span class="order-status">${statusText}</span>
      </div>
    `;
  }).join('');
}

/* ---------- Próximos proyectos ---------- */
function renderUpcomingBooks() {
  const grid = document.getElementById('upcomingGrid');
  if (!grid) return;

  grid.innerHTML = UPCOMING_BOOKS.map((book, i) => `
    <div class="book-card" style="--i:${i}">
      <div class="book-cover">
        ${book.coverUrl 
          ? `<img src="${book.coverUrl}" alt="${book.title}" loading="lazy">`
          : `<div class="cover-placeholder" style="--hue:${book.hue}">
              <svg class="cover-icon" viewBox="0 0 24 24"><use href="#icon-book"></use></svg>
              <span class="cover-letter">${book.title.charAt(0)}</span>
            </div>`
        }
      </div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-soon">Próximo</span>
    </div>
  `).join('');
}

/* ---------- Actualizaciones ---------- */
function renderUpdates() {
  const container = document.getElementById('updatesList');
  if (!container) return;

  const updates = [
    { version: "v1.0.0", date: "30/08/2026", desc: "Lanzamiento inicial de LibroAmore con catálogo básico." },
    { version: "v1.1.0", date: "Próximamente", desc: "Sección de 'Próximos proyectos' y 'Actualizaciones' añadida." }
  ];

  container.innerHTML = updates.map(update => `
    <div class="update-item">
      <div>
        <span class="update-version">${update.version}</span>
        <span class="update-date">${update.date}</span>
      </div>
      <div class="update-desc">${escapeHtml(update.desc)}</div>
    </div>
  `).join('');
}

// ============================================
//  ILUSTRACIONES
// ============================================

const ILUSTRACIONES = {
  nsfw: [
    // ... tus ilustraciones NSFW (sin cambios)
  ],
  sfw: [
    // ... tus ilustraciones SFW (sin cambios)
  ]
};

// ============================================
//  SERIES (para la sección Autores)
// ============================================

const SERIES = [
  {
    id: "wittmore",
    title: "G.M. Fairy",
    subtitle: "Libros de romance, Fantasía, Ciencia ficción",
    image: "https://i.postimg.cc/25rZPQWB/1.png",
    description: "На льду играют жестко. Влюбляются — еще жестче. Четыре самостоятельные истории из университета Уиттмор: капитан, вратарь, защитник и тафгай — и девушки, рядом с которыми правила команды перестают работать.",
    books: [
      { number: "01", title: "Игра в любовь с форвардом", subtitle: "НАЧАЛО ИСТОРИИ", status: "✅ перевод завершен", id: "Say My Name" },
      { number: "02", title: "Под защитой вратаря", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "MONSTROUS" },
      { number: "03", title: "Мой дерзкий защитник", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Fervor" },
      { number: "3.1", title: "Мой дерзкий защитник. Бонус", subtitle: "БОНУС К КНИГЕ 3", status: "✅ перевод завершен", id: "mapa-constelado" },
      { number: "04", title: "Соблазн для тафгая", subtitle: "ФИНАЛ СЕРИИ", status: "✅ перевод завершен", id: "Banging My Birthday Bear" }
    ]
  },
  {
    id: "wolf-king",
    title: "Король волков",
    subtitle: "РОМЭНТЕЗИ • 3 книги",
    image: "https://i.postimg.cc/Y2ZmpKgp/2.png",
    description: "3 книги • 2 из 3 готовы",
    books: [
      { number: "01", title: "Книга 1", subtitle: "НАЧАЛО", status: "✅ перевод завершен", id: "Pounded By Poseidon" },
      { number: "02", title: "Книга 2", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Say My Name" },
      { number: "03", title: "Книга 3", subtitle: "ФИНАЛ", status: "⏳ перевод в процессе", id: "MONSTROUS" }
    ]
  },
  {
    id: "mortal-vows",
    title: "Смертельные клятвы",
    subtitle: "МАФИОЗНАЯ РОМАНТИКА • 5 книг",
    image: "https://i.postimg.cc/BnGLKTMB/3.png",
    description: "5 книг • перевод завершен",
    books: [
      { number: "01", title: "Смертельные клятвы", subtitle: "НАЧАЛО ИСТОРИИ", status: "✅ перевод завершен", id: "Banging My Birthday Bear" },
      { number: "02", title: "Праведные клятвы", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Pounded By Poseidon" },
      { number: "03", title: "Коварные клятвы", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Say My Name" },
      { number: "04", title: "Безумные клятвы", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "MONSTROUS" },
      { number: "05", title: "Неправильные клятвы", subtitle: "ФИНАЛ СЕРИИ", status: "✅ перевод завершен", id: "Fervor" }
    ]
  }
];

// ============================================
//  RENDERIZAR SERIES (con búsqueda)
// ============================================

function filterSeriesGrid() {
  const input = document.getElementById('searchAutoresInput');
  searchTermAutores = input ? input.value.toLowerCase().trim() : '';
  renderSeriesGrid();
}

function renderSeriesGrid() {
  const grid = document.getElementById('seriesGrid');
  if (!grid) return;

  // Filtrar series
  let filtered = SERIES;
  if (searchTermAutores) {
    filtered = SERIES.filter(serie =>
      serie.title.toLowerCase().includes(searchTermAutores) ||
      serie.subtitle.toLowerCase().includes(searchTermAutores)
    );
  }

  // Renderizar
  grid.innerHTML = filtered.map(serie => `
    <div class="serie-card" style="background-image: url('${serie.image}');" onclick="openSerieDetail('${serie.id}')">
      <div class="overlay">
        <h3>${escapeHtml(serie.title)}</h3>
        <div class="serie-sub">${escapeHtml(serie.subtitle)}</div>
        <div class="serie-btn">Порядок чтения ›</div>
      </div>
    </div>
  `).join('');
}

// ============================================
//  DETALLE DE SERIE
// ============================================

window.openSerieDetail = function(serieId) {
  const serie = SERIES.find(s => s.id === serieId);
  if (!serie) return;

  const container = document.getElementById('serieDetail');
  if (!container) return;

  container.innerHTML = `
    <div class="serie-detail-card">
      <div class="serie-detail-header">
        <h2>${escapeHtml(serie.title)}</h2>
        <p>${escapeHtml(serie.subtitle)}</p>
      </div>
      <div class="serie-detail-body">
        <p class="desc">${escapeHtml(serie.description)}</p>
        <div class="order-list">
          ${serie.books.map(book => `
            <div class="order-item" onclick="openBookDetail('${book.id}')" style="cursor:pointer;">
              <span class="num">${book.number}</span>
              <div class="info">
                <div class="title">${escapeHtml(book.title)}</div>
                <div class="sub">${escapeHtml(book.subtitle)}</div>
              </div>
              <span class="status">${escapeHtml(book.status)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  openScreen('serie-detail');
};

// ... (resto de funciones: mostrarIlustraciones, abrirDetalleIlustracion, navegación inferior, reacciones) ...

// ============================================
//  INICIO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  if (!checkTelegramEnvironment()) return;
  
  loadTheme();
  
  renderTopbar("home");
  renderBooksGrid();
  renderReadingOrder();
  renderUpcomingBooks();
  renderUpdates();
  mostrarIlustraciones('nsfw', 'nsfwGrid');
  mostrarIlustraciones('sfw', 'sfwGrid');
  renderSeriesGrid(); // ← Solo esto para Autores
});
