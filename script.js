// Cambiar entre pantallas (welcome, menu, anuncios, libros, autores, extra)
function showScreen(screenId) {
    // Ocultar todas
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    // Mostrar la seleccionada
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');

    // Si es la pantalla de libros, forzar un pequeño reflow para que los estilos se apliquen bien
    if (screenId === 'libros') {
        // No es necesario hacer nada extra, pero podemos llamar a un ajuste si se necesita
    }
}

// Inicializar: mostrar bienvenida (ya está activa por defecto en el HTML)
// Pero por si acaso, aseguramos:
document.addEventListener('DOMContentLoaded', () => {
    showScreen('welcome');
});
