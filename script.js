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
    synopsis: "Pasar su trigésimo cumpleaños con amigas escondidas en las montañas es exactamente lo que quiere. Pero tener una aventura cruda y apasionada con un osito de peluche de tamaño real es exactamente lo que necesita. ¡Es el Dirty Thirty de Mia y está lista para divertirse! Cuando sus amigas la sorprenden con un osito de peluche gigante, con una anatomía realista, su día especial se convierte en algo de ensueño. Y me refiero a rellena, que es exactamente como pasa la noche con su sorpresa de cumpleaños, llena hasta el borde y lista para explotar. ¿Estás lista para enamorarte de Bear?",
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
    synopsis: "Se suponía que ganar el concurso de esculturas de arena de Mountcastle Cove sería el boleto de Isla Moore para superar las acciones destructivas de su padre en el evento del año pasado. Cuando pierde y su impresionante escultura de arena es alcanzada por un rayo, cree que sus esperanzas se han desvanecido como la marea. Pero entonces conoce a un nuevo papi que quiere cuidarla y hacerla suya. Todo lo que necesita hacer es confiar en él y dejar todo bajo su control. Es más fácil decirlo que hacerlo. Papi viene por ti.",
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
    synopsis: "Un trato con una demonio es su único camino hacia la libertad, pero ¿cuál será el precio?",
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
    synopsis: "En la Inglaterra victoriana de la década de 1840, la botánica Camellia Reed acepta un puesto como asistente de investigación del reservado Dr. Nicholas Ambrose, un brillante pero atormentado médico que estudia la pérdida de memoria mediante peligrosos experimentos con plantas. Desesperada por recuperar sus propios recuerdos perdidos después de un misterioso colapso que dejó vacíos en su pasado, Camellia se siente atraída tanto por la revolucionaria investigación del doctor como por el propio hombre. Pero la Casa Ambrose oculta oscuros secretos: un sirviente vegetal llamado Hawthorne, un invernadero lleno de especímenes que brillan en la oscuridad y el fantasma de la difunta esposa del doctor, cuya presencia impregna cada rincón de la casa. Sin embargo, Camellia también guarda sus propios secretos y jamás se quita la cinta de terciopelo verde que rodea su garganta. ¿Qué oculta?",
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
    synopsis: "La ha llamado durante toda su vida, pero ella nunca pudo responderle… Midonia, una transportista interplanetaria independiente, se encuentra en una situación delicada después de un accidente fatal ocurrido durante uno de sus trabajos. Por eso, no protesta cuando le encomiendan la tediosa tarea de llevar a la devota hermana Irena a un remoto planeta en los confines del espacio, donde una pequeña colonia religiosa venera a una extraña deidad llamada Angustia. Hasta ahora. Cuando una llamarada solar deja su nave en tierra, Midonia se encuentra atrapada junto a las hermanas de aquella secta. Y, para empeorar las cosas, él se le aparece durante la noche, con aquella voz familiar más fuerte que nunca. Invade su mente con su hambre, despertando en ella una obsesión voraz de la que será casi imposible escapar.",
    coverUrl: "https://m.media-amazon.com/images/I/41egFhRk3UL._SY445_SX342_FMwebp_.jpg",
    hue: 150
  },
  {
    id: "mapa-constelado",
    title: "El mapa constelado",
    author: "Iris Vantel",
    series: "Crónicas de Talvera",
    part: 1,
    classification: "+16",
    status: "Disponible",
    statusClass: "available",
    tags: ["Fantasía", "Aventura", "Romance"],
    synopsis: "Para encontrar el reino perdido de su madre, Yeva solo tiene un mapa incompleto y la ayuda no solicitada del cartógrafo más insoportable del continente.",
    coverUrl: null,
    hue: 15
  }
];

/* ---------- Libros próximos (para sección "Próximos proyectos") ---------- */
const UPCOMING_BOOKS = [
  {
    id: "upcoming-1",
    title: "El susurro del océano",
    author: "Marina Sol",
    coverUrl: null,
    hue: 200
  },
  {
    id: "upcoming-2",
    title: "Bajo la luna de octubre",
    author: "Luna Ríos",
    coverUrl: null,
    hue: 30
  },
  {
    id: "upcoming-3",
    title: "El jardín de las mariposas",
    author: "Abril Montes",
    coverUrl: null,
    hue: 150
  }
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
  sfw: "🖼️ SFW",
  "illustration-detail": "Detalle",
  nosotras: "Nosotras",
  "serie-detail": "Detalle de serie"
};

/* ---------- Navegación ---------- */
const navStack = ["home"];

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

function renderTopbar(name) {
  const topbar = document.getElementById("topbar");
  if (name === "home") {
    topbar.innerHTML = `
      <span class="topbar-brand">
        <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-book"></use></svg>
        <span>LibroAmore</span>
      </span>
    `;
  } else {
    const title = SCREEN_TITLES[name] || name;
    topbar.innerHTML = `
      <div class="topbar-nav">
        <button class="back-btn" onclick="goBack()" aria-label="Volver">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-chevron-left"></use></svg>
          <span>Volver</span>
        </button>
        <span class="topbar-title">${escapeHtml(title)}</span>
      </div>
    `;
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

/* ---------- Libros disponibles ---------- */
function renderBooksGrid() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;
  grid.innerHTML = BOOKS.map((book, i) => `
    <button class="book-card" style="--i:${i}" onclick="openBookDetail('${book.id}')">
      <div class="book-cover">${coverMarkup(book, false)}</div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </button>
  `).join("");
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

  // Obtener datos guardados (si existen)
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

    <!-- REACCIONES -->
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
    title: "Уиттмор и хоккей",
    subtitle: "ХОККЕЙНАЯ РОМАНТИКА • 4 книги + бонус",
    image: "https://drive.google.com/uc?export=view&id=TU_ID_1",
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
    image: "https://drive.google.com/uc?export=view&id=TU_ID_2",
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
    image: "https://drive.google.com/uc?export=view&id=TU_ID_3",
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
//  INICIO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  if (!checkTelegramEnvironment()) return;
  
  renderTopbar("home");
  renderBooksGrid();
  renderReadingOrder();
  renderUpcomingBooks();
  renderUpdates();
  mostrarIlustraciones('nsfw', 'nsfwGrid');
  mostrarIlustraciones('sfw', 'sfwGrid');
  renderSeriesGrid();
});
