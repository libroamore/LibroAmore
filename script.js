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
  // ============================================
  //  TODOS TUS LIBROS (YA ESTÁN AQUÍ)
  // ============================================
];

/* ---------- Libros próximos ---------- */
const UPCOMING_BOOKS = [
  // ============================================
  //  TUS LIBROS PRÓXIMOS (YA ESTÁN AQUÍ)
  // ============================================
];

// ============================================
//  ESTADO DE BÚSQUEDA Y ORDEN
// ============================================

let currentSort = 'alpha-asc';
let searchTerm = '';

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

// FUNCIONES DE NAVEGACIÓN (definidas DESPUÉS)
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

/* ---------- Libros disponibles ---------- */
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
    {
      id: "nsfw-1",
      nombre: "Wattson x Jewel",
      libro: "Fully Charged",
      imagen: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
      descripcion: "Jewel y su Conejito."
    },
    {
      id: "nsfw-2",
      nombre: "Mia x Bear",
      libro: "Banging My Birthday Bear",
      imagen: "https://m.media-amazon.com/images/I/81NbDUhl0nL._SY425_.jpg",
      descripcion: "Mia y su osito de peluche en la cabaña de montaña."
    }
  ],
  sfw: [
    {
      id: "sfw-1",
      nombre: "Paisaje de Nimbus",
      libro: "Nimbus",
      imagen: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
      descripcion: "Ilustración del paisaje de Nimbus al atardecer."
    }
  ]
};

// ============================================
//  SERIES (para la sección Autores)
// ============================================

const SERIES = [
  {
    id: "wittmore",
    title: "G.M. Fairy",
    subtitle: "Libros de romace, Fantasía, Ciencia ficción",
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
//  RENDERIZAR SERIES
// ============================================

function renderSeriesGrid() {
  const grid = document.getElementById('seriesGrid');
  if (!grid) return;

  grid.innerHTML = SERIES.map(serie => `
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
//  CATEGORÍAS (para el detalle de serie)
// ============================================

const CATEGORIES = [
  {
    id: "serie-ghostlight",
    label: "👻 Serie Ghostlight",
    type: "series",
    seriesId: "wittmore"
  },
  {
    id: "serie-dark-empire",
    label: "⚔️ Serie Dark Empire",
    type: "series",
    seriesId: "wolf-king"
  },
  {
    id: "libros-unicos",
    label: "📖 Libros únicos",
    type: "books",
    bookIds: ["Banging My Birthday Bear", "Pounded By Poseidon", "Say My Name", "MONSTROUS", "Fervor", "mapa-constelado", "Hopeless Necromantic", "Handle Me", "Spackled", "My Date With A Rubber Duckie", "Step Brother Bear", "Shower Head", "Fully Charged", "Bad BeehAvior", "Gimme A Pizza Dat Azz", "Rake", "Formaldehyde", "Laid by the Lint Monster", "Goldie and the Bear Affair", "Scream For Me", "Dead... Serious About You", "Fear, and Other Love Languages", "Hopper", "Eat Your Heart Out", "SPF ME", "SINFUL", "Slay Bells", "Hallowpeen", "Taking Daddys Load", "susurros-en-la-oscuridad"]
  }
];

// ============================================
//  RENDERIZAR CATEGORÍAS (en detalle de serie)
// ============================================

function renderCategoryMenuDetail() {
  const menu = document.getElementById('categoryMenuDetail');
  if (!menu) return;

  menu.innerHTML = CATEGORIES.map(cat => `
    <button class="category-btn" data-category="${cat.id}" onclick="selectCategoryDetail('${cat.id}')">
      ${cat.label}
    </button>
  `).join('');

  if (CATEGORIES.length > 0) {
    selectCategoryDetail(CATEGORIES[0].id);
  }
}

function selectCategoryDetail(categoryId) {
  document.querySelectorAll('#categoryMenuDetail .category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });

  const category = CATEGORIES.find(c => c.id === categoryId);
  if (!category) return;

  const container = document.getElementById('categoryContentDetail');
  if (!container) return;

  if (category.type === 'series') {
    const serie = SERIES.find(s => s.id === category.seriesId);
    if (!serie) return;

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
  } else if (category.type === 'books') {
    const booksList = category.bookIds
      .map(id => BOOKS.find(b => b.id === id))
      .filter(b => b !== undefined);

    container.innerHTML = `
      <div class="books-grid">
        ${booksList.map(book => `
          <button class="book-card" onclick="openBookDetail('${book.id}')">
            <div class="book-cover">${coverMarkup(book, false)}</div>
            <h3 class="book-title">${escapeHtml(book.title)}</h3>
            <p class="book-author">${escapeHtml(book.author)}</p>
          </button>
        `).join('')}
      </div>
    `;
  }
}

window.openSerieDetail = function(serieId) {
  renderCategoryMenuDetail();
  openScreen('serie-detail');
};

function mostrarIlustraciones(categoria, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  
  const items = ILUSTRACIONES[categoria] || [];
  contenedor.innerHTML = items.map(item => `
    <div class="illustration-card" onclick="abrirDetalleIlustracion('${categoria}', '${item.id}')">
      <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
      <div class="illustration-name">${item.nombre}</div>
    </div>
  `).join('');
}

window.abrirDetalleIlustracion = function(categoria, id) {
  const items = ILUSTRACIONES[categoria] || [];
  const item = items.find(i => i.id === id);
  if (!item) return;

  const detailEl = document.getElementById('illustrationDetail');
  if (detailEl) {
    detailEl.innerHTML = `
      <div class="detail-illustration">
        <img src="${item.imagen}" alt="${item.nombre}">
        <div class="detail-info">
          <h2>${item.nombre}</h2>
          <p class="detail-book">📖 <strong>Libro:</strong> ${item.libro}</p>
          <p class="detail-desc">${item.descripcion}</p>
        </div>
      </div>
    `;
  }
  openScreen('illustration-detail');
};

// ============================================
//  NAVEGACIÓN INFERIOR
// ============================================

window.navigateTo = function(screenName) {
  openScreen(screenName);
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screenName);
  });
};

// ============================================
//  REACCIONES (Heart y Stars)
// ============================================

function getReactions(bookId) {
  try {
    const data = JSON.parse(localStorage.getItem('reacciones') || '{}');
    return data[bookId] || { heart: false, stars: 0 };
  } catch {
    return { heart: false, stars: 0 };
  }
}

function saveReaction(bookId, type, value) {
  const data = JSON.parse(localStorage.getItem('reacciones') || '{}');
  if (!data[bookId]) data[bookId] = { heart: false, stars: 0 };
  
  if (type === 'heart') {
    data[bookId].heart = value;
  } else if (type === 'stars') {
    data[bookId].stars = value;
  }
  
  localStorage.setItem('reacciones', JSON.stringify(data));
  updateReactionUI(bookId);
}

function updateReactionUI(bookId) {
  const saved = getReactions(bookId);
  
  const heartCount = document.getElementById(`heart-count-${bookId}`);
  if (heartCount) {
    heartCount.textContent = saved.heart ? '1' : '0';
    const heartBtn = heartCount.closest('.reaction-btn');
    if (heartBtn) {
      heartBtn.classList.toggle('active-heart', saved.heart);
    }
  }
  
  const starCount = document.getElementById(`star-count-${bookId}`);
  if (starCount) {
    const count = saved.stars || 0;
    starCount.textContent = count > 0 ? count : '0';
    const starBtn = starCount.closest('.reaction-btn');
    if (starBtn) {
      starBtn.classList.toggle('active-star', count > 0);
    }
  }
}

window.toggleHeart = function(bookId) {
  const saved = getReactions(bookId);
  const newValue = !saved.heart;
  saveReaction(bookId, 'heart', newValue);
  showToast(newValue ? '❤️ Añadido a favoritos' : '💔 Eliminado de favoritos');
};

window.openStarSelector = function(bookId) {
  const saved = getReactions(bookId);
  const currentStars = saved.stars || 0;
  
  const overlay = document.createElement('div');
  overlay.className = 'star-selector-overlay show';
  overlay.id = 'starSelectorOverlay';
  overlay.innerHTML = `
    <div class="star-selector">
      <h3>⭐ Califica este libro</h3>
      <div class="stars">
        ${[1, 2, 3, 4, 5].map(n => `
          <button data-value="${n}" class="${n <= currentStars ? 'active' : ''}" onclick="selectStar('${bookId}', ${n})">
            ${n <= currentStars ? '⭐' : '☆'}
          </button>
        `).join('')}
      </div>
      <button class="close-btn" onclick="closeStarSelector()">Cerrar</button>
    </div>
  `;
  
  overlay.addEventListener('click', function(e) {
    if (e.target === this) closeStarSelector();
  });
  
  document.body.appendChild(overlay);
};

window.selectStar = function(bookId, value) {
  saveReaction(bookId, 'stars', value);
  
  document.querySelectorAll('.star-selector .stars button').forEach(btn => {
    const val = parseInt(btn.dataset.value);
    btn.textContent = val <= value ? '⭐' : '☆';
    btn.classList.toggle('active', val <= value);
  });
  
  const countEl = document.getElementById(`star-count-${bookId}`);
  if (countEl) {
    countEl.textContent = value;
    const starBtn = countEl.closest('.reaction-btn');
    if (starBtn) {
      starBtn.classList.toggle('active-star', true);
    }
  }
  
  showToast(`⭐ Calificación: ${value} estrella${value > 1 ? 's' : ''}`);
  setTimeout(closeStarSelector, 800);
};

window.closeStarSelector = function() {
  const overlay = document.getElementById('starSelectorOverlay');
  if (overlay) overlay.remove();
};

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
  renderSeriesGrid();
});
