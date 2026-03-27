// =============================================================
// custom-messages.js — Mensajes personalizados por dia
// Edita este archivo o usa el Excel para generar los mensajes
// La app carga este archivo 2 veces al dia automaticamente
// =============================================================
// === UN MENSAJE POR DIA ===
// Formato: 'YYYY-MM-DD': { message: '...', title: '...', time: 'HH:MM' }
//
// === VARIOS MENSAJES EN EL MISMO DIA ===
// Formato: 'YYYY-MM-DD': [
//     { message: 'Mensaje 1', title: 'Titulo 1', time: '08:00' },
//     { message: 'Mensaje 2', title: 'Titulo 2', time: '14:00' },
//     { message: 'Mensaje 3', title: 'Titulo 3', time: '20:00' }
// ]
//
// - message: Texto del mensaje (obligatorio para que se envie)
// - title: Titulo de la notificacion (opcional, default: 'Moon Sync')
// - time: Hora de envio en formato 24h Costa Rica (opcional, default: '08:00')

window.CUSTOM_MESSAGES = {
    // === EJEMPLOS (descomenta y edita) ===
    // Un mensaje:
    // '2026-03-20': { message: 'Equinoccio de primavera. El Sol entra en Aries.', title: 'Equinoccio', time: '08:00' },
    //
    // Varios mensajes en el mismo dia:
    // '2026-03-03': [
    //     { message: 'Eclipse Lunar Total esta noche en Virgo.', title: 'Eclipse Lunar', time: '08:00' },
    //     { message: 'Preparate para el eclipse! Empieza en 2 horas.', title: 'Eclipse', time: '22:00' },
    //     { message: 'El eclipse esta por comenzar. Sal a ver la luna!', title: 'Eclipse Ahora', time: '23:30' }
    // ],

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
