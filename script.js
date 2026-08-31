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
@@ -96,7 +135,7 @@ const SCREEN_TITLES = {
  anuncios: "Anuncios",
  libros: "Libros disponibles",
  autores: "Autores",
  extras: "Contenido extra",  // CORREGIDO: ahora es "extras" (con s)
  extras: "Contenido extra",
  "libro-detail": "Detalle del libro"
};

@@ -295,6 +334,10 @@ window.downloadFormat = function(format) {

/* ---------- Inicio ---------- */
document.addEventListener('DOMContentLoaded', function() {
  // PRIMERO: verificar el entorno
  if (!checkTelegramEnvironment()) return;
  
  // Si está en Telegram, iniciar la app
  renderTopbar("home");
  renderBooksGrid();
});
