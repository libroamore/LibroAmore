/* ===========================================================
   LibroAmore — navegación interna y datos de ejemplo
   =========================================================== */

// ============================================
//  VERIFICACIÓN DE ENTORNO (Telegram vs Web)
// ============================================

function checkTelegramEnvironment() {
    const tg = window.Telegram?.WebApp;
    // Verifica que exista el objeto de Telegram y que tenga datos de usuario
    const isTelegram = !!(tg && tg.initDataUnsafe && tg.initDataUnsafe.user);
    
    // Si NO está en Telegram:
    if (!isTelegram) {
        // 1. Ocultar la app
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'none';
        
        // 2. Mostrar el mensaje de bloqueo
        const blockedMsg = document.getElementById('blocked-message');
        if (blockedMsg) {
            blockedMsg.style.display = 'flex';
        }
        
        // 3. Cambiar título de la página
        document.title = 'Solo en Telegram';
        
        // 4. Detener la ejecución del resto del script
        return false;
    }
    
    // Si está en Telegram: mostrar la app
    const appShell = document.getElementById('appShell');
    if (appShell) appShell.style.display = 'block';
    
    return true;
}

// ============================================
//  DATOS DE EJEMPLO
// ============================================

const tg = window.Telegram?.WebApp;

/* ---------- Datos de ejemplo ---------- */
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

const SCREEN_TITLES = {
  anuncios: "Anuncios",
  libros: "Libros disponibles",
  autores: "Autores",
  extras: "Contenido extra",
  "libro-detail": "Detalle del libro"
};

/* ---------- Navegación ---------- */
const navStack = ["home"];

// FUNCIONES GLOBALES (accesibles desde HTML)
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

/* ---------- Libros ---------- */
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

/* ---------- Inicio ---------- */
document.addEventListener('DOMContentLoaded', function() {
  // PRIMERO: verificar el entorno
  if (!checkTelegramEnvironment()) return;
  
  // Si está en Telegram, iniciar la app
  renderTopbar("home");
  renderBooksGrid();
});
