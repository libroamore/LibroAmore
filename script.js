/* ===========================================================
   LibroAmore — navegación interna y datos de ejemplo
   =========================================================== */

const tg = window.Telegram?.WebApp;

/* ---------- Datos de ejemplo ---------- */
const BOOKS = [
  {
    id: "susurro-camelias",
    title: "El susurro de las camelias",
    author: "Noelia Ferrand",
    series: "Jardines de cristal",
    part: 1,
    classification: "+16",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Slow burn"],
    synopsis: "Entre invernaderos abandonados y cartas nunca enviadas, Ada descubre que el jardín de su abuela guarda un secreto que podría reunirla con el amor que creyó perdido para siempre.",
    coverUrl: null,
    hue: 340
  },
  {
    id: "cartas-invierno",
    title: "Cartas para un invierno eterno",
    author: "Damir Osei",
    series: null,
    part: null,
    classification: "Todo público",
    status: "Disponible",
    statusClass: "available",
    tags: ["Drama", "Epistolar", "Romance"],
    synopsis: "Una correspondencia que cruza fronteras y estaciones: dos desconocidos se escriben durante un año entero sin saber que el destino ya los ha presentado antes.",
    coverUrl: null,
    hue: 25
  },
  {
    id: "sombra-escribano",
    title: "La sombra del escribano",
    author: "Iris Vantel",
    series: "Crónicas de Talvera",
    part: 2,
    classification: "+18",
    status: "Próximamente",
    statusClass: "soon",
    tags: ["Fantasía oscura", "Misterio"],
    synopsis: "El escribano real oculta una verdad capaz de derrumbar la corte. Cuando Yeva la descubre por accidente, se convierte en la única testigo de una traición milenaria.",
    coverUrl: null,
    hue: 260
  },
  {
    id: "vals-extranos",
    title: "Un vals para dos extraños",
    author: "Marguerite Solaas",
    series: null,
    part: null,
    classification: "+16",
    status: "En revisión",
    statusClass: "review",
    tags: ["Histórico", "Romance", "Baile"],
    synopsis: "En un salón de baile de 1920, una promesa susurrada entre dos pasos de vals cambia el rumbo de dos familias enfrentadas por generaciones.",
    coverUrl: null,
    hue: 200
  },
  {
    id: "jardinero-papel",
    title: "El jardinero de papel",
    author: "Renji Okoro",
    series: "Jardines de cristal",
    part: 2,
    classification: "Todo público",
    status: "Disponible",
    statusClass: "available",
    tags: ["Slice of life", "Romance", "Arte"],
    synopsis: "Un origamista solitario y una florista con insomnio comparten balcón, ventana y, poco a poco, todo lo demás.",
    coverUrl: null,
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
  extras: "Contenido extra",  // CORREGIDO: ahora es "extras" (con s)
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
  renderTopbar("home");
  renderBooksGrid();
});
