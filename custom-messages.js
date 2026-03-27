// =============================================================
// custom-messages.js — Mensajes personalizados por dia
// Edita este archivo o usa el Excel para generar los mensajes
// La app carga este archivo 2 veces al dia automaticamente
// =============================================================
// Formato: 'YYYY-MM-DD': { message: '...', title: '...', time: 'HH:MM' }
// - message: Texto del mensaje (obligatorio para que se envie)
// - title: Titulo de la notificacion (opcional, default: 'Moon Sync')
// - time: Hora de envio en formato 24h Costa Rica (opcional, default: '08:00')

window.CUSTOM_MESSAGES = {
    // === EJEMPLO (descomenta y edita) ===
    // '2026-03-03': { message: 'Eclipse Lunar Total esta noche en Virgo. Sal a observar!', title: 'Eclipse Lunar', time: '18:00' },
    // '2026-03-20': { message: 'Equinoccio de primavera. El Sol entra en Aries.', title: 'Equinoccio', time: '08:00' },

    // === ENERO 2026 ===

    // === FEBRERO 2026 ===

    // === MARZO 2026 ===

    // === ABRIL 2026 ===

    // === MAYO 2026 ===

    // === JUNIO 2026 ===

    // === JULIO 2026 ===

    // === AGOSTO 2026 ===

    // === SEPTIEMBRE 2026 ===

    // === OCTUBRE 2026 ===

    // === NOVIEMBRE 2026 ===

    // === DICIEMBRE 2026 ===
};

console.log('custom-messages.js cargado —', Object.keys(window.CUSTOM_MESSAGES).length, 'mensajes programados');
