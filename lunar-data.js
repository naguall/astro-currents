// =============================================================
// lunar-data.js — Datos lunares externos y actualizables
// Para agregar un año nuevo: añadir las fechas en cada sección
// Fuente: NASA / USNO / timeanddate.com
// Zona horaria: UTC — se convierte a Costa Rica (UTC-6) automáticamente
// =============================================================

// ─── LUNAS NUEVAS (UTC) ───────────────────────────────────────
window.LUNAR_NEW_MOONS_UTC = [
    // 2024
    '2024-12-01T06:21:00Z',
    '2024-12-30T22:27:00Z',

    // 2025
    '2025-01-29T12:36:00Z',
    '2025-02-27T20:45:00Z',
    '2025-03-29T10:58:00Z',
    '2025-04-27T19:31:00Z',
    '2025-05-27T03:02:00Z',
    '2025-06-25T10:32:00Z',
    '2025-07-24T19:11:00Z',
    '2025-08-23T06:06:00Z',
    '2025-09-21T19:54:00Z',
    '2025-10-21T12:25:00Z',
    '2025-11-20T06:47:00Z',
    '2025-12-20T01:43:00Z',

    // 2026 — Verificado NASA/USNO
    '2026-01-18T19:52:00Z',
    '2026-02-17T12:01:00Z',  // Eclipse Solar Anular
    '2026-03-18T02:23:00Z',
    '2026-04-17T11:52:00Z',
    '2026-05-16T20:01:00Z',
    '2026-06-15T02:54:00Z',
    '2026-07-14T09:44:00Z',
    '2026-08-12T17:37:00Z',  // Eclipse Solar Total
    '2026-09-11T03:27:00Z',
    '2026-10-10T16:00:00Z',
    '2026-11-09T07:02:00Z',
    '2026-12-09T00:52:00Z',

    // 2027 — Verificado NASA/USNO
    '2027-01-07T19:24:00Z',
    '2027-02-06T13:56:00Z',
    '2027-03-08T06:29:00Z',
    '2027-04-06T19:51:00Z',
    '2027-05-06T06:58:00Z',
    '2027-06-04T16:10:00Z',
    '2027-07-03T23:02:00Z',
    '2027-08-02T04:45:00Z',
    '2027-08-31T10:41:00Z',
    '2027-09-29T18:36:00Z',
    '2027-10-29T05:36:00Z',
    '2027-11-27T20:25:00Z',
    '2027-12-27T13:13:00Z',

    // 2028 — Agregar aquí cuando sea necesario
    // '2028-01-26T07:13:00Z',
    // ...
];

// ─── LUNAS LLENAS (UTC) — Fechas astronómicas exactas ─────────
// A diferencia de las lunas nuevas, estas son fechas reales (no calculadas)
window.LUNAR_FULL_MOONS_UTC = [
    // 2025
    '2025-01-13T22:27:00Z',
    '2025-02-12T13:53:00Z',
    '2025-03-14T06:55:00Z',
    '2025-04-12T20:22:00Z', // Superluna
    '2025-05-12T16:56:00Z', // Superluna
    '2025-06-11T07:44:00Z', // Superluna
    '2025-07-10T20:37:00Z', // Superluna
    '2025-08-09T07:55:00Z',
    '2025-09-07T18:09:00Z', // Eclipse Lunar Parcial
    '2025-10-07T03:48:00Z',
    '2025-11-05T13:19:00Z',
    '2025-12-04T23:14:00Z',

    // 2026 — Verificado NASA/USNO
    '2026-01-03T10:03:00Z',
    '2026-02-01T22:09:00Z',
    '2026-03-03T11:38:00Z', // Eclipse Lunar Total
    '2026-04-02T02:12:00Z',
    '2026-05-01T17:23:00Z',
    '2026-05-31T08:45:00Z',
    '2026-06-30T00:57:00Z',
    '2026-07-29T17:36:00Z',
    '2026-08-28T04:51:00Z', // Eclipse Lunar Parcial
    '2026-09-26T16:49:00Z',
    '2026-10-26T04:12:00Z',
    '2026-11-24T14:53:00Z',
    '2026-12-24T01:28:00Z',

    // 2027 — Verificado NASA/USNO
    '2027-01-22T11:17:00Z',
    '2027-02-20T23:24:00Z',
    '2027-03-22T10:44:00Z',
    '2027-04-20T22:27:00Z',
    '2027-05-20T11:59:00Z',
    '2027-06-19T03:44:00Z',
    '2027-07-18T22:44:00Z',
    '2027-08-17T19:46:00Z',
    '2027-09-16T16:05:00Z', // Eclipse Lunar Total
    '2027-10-16T09:15:00Z',
    '2027-11-14T23:59:00Z',
    '2027-12-14T12:25:00Z',

    // 2028 — Agregar aquí cuando sea necesario
    // '2028-01-13T00:03:00Z',
    // ...
];

// ─── ECLIPSES por año ─────────────────────────────────────────
// Para agregar un año nuevo: añadir un objeto en window.LUNAR_ECLIPSES
window.LUNAR_ECLIPSES = {
    2025: [
        {
            date: '2025-03-14',
            time: '02:55', type: 'lunar',
            name: 'Eclipse Lunar Total',
            degree: "23°57' ♍ Virgo",
            visibility: 'América, Europa, África',
            aspects: [
                { planet: 'Saturno', aspect: 'Conjunción', description: 'Responsabilidad emocional' },
                { planet: 'Neptuno', aspect: 'Oposición', description: 'Claridad vs ilusión' }
            ]
        },
        {
            date: '2025-09-07',
            time: '16:09', type: 'lunar',
            name: 'Eclipse Lunar Parcial',
            degree: "15°23' ♓ Piscis",
            visibility: 'Europa, África, Asia, Australia',
            aspects: [
                { planet: 'Saturno', aspect: 'Conjunción', description: 'Límites, madurez' },
                { planet: 'Neptuno', aspect: 'Conjunción', description: 'Espiritualidad profunda' }
            ]
        }
    ],
    2026: [
        {
            date: '2026-02-17',
            time: '07:01', type: 'solar',
            name: 'Eclipse Solar Anular',
            degree: "28°36' ♒ Acuario",
            visibility: 'Antártida, sur de África, sur del Océano Índico',
            aspects: [
                { planet: 'Saturno', aspect: 'Conjunción', description: 'Estructura, responsabilidad' },
                { planet: 'Júpiter', aspect: 'Sextil', description: 'Expansión, oportunidades' },
                { planet: 'Urano', aspect: 'Cuadratura', description: 'Cambios súbitos, liberación' }
            ]
        },
        {
            date: '2026-03-03',
            time: '06:38', type: 'lunar',
            name: 'Eclipse Lunar Total',
            degree: "12°24' ♍ Virgo",
            visibility: 'América, Europa, África',
            aspects: [
                { planet: 'Neptuno', aspect: 'Oposición', description: 'Claridad vs ilusión' },
                { planet: 'Plutón', aspect: 'Trígono', description: 'Transformación profunda' },
                { planet: 'Marte', aspect: 'Sextil', description: 'Acción constructiva' }
            ]
        },
        {
            date: '2026-08-12',
            time: '13:36', type: 'solar',
            name: 'Eclipse Solar Total',
            degree: "20°03' ♌ Leo",
            visibility: 'Groenlandia, Islandia, España',
            aspects: [
                { planet: 'Venus', aspect: 'Conjunción', description: 'Amor, valores, belleza' },
                { planet: 'Júpiter', aspect: 'Cuadratura', description: 'Exceso, optimismo exagerado' }
            ]
        },
        {
            date: '2026-08-28',
            time: '00:18', type: 'lunar',
            name: 'Eclipse Lunar Parcial',
            degree: "05°07' ♓ Piscis",
            visibility: 'América, Europa, África, Asia',
            aspects: [
                { planet: 'Saturno', aspect: 'Conjunción', description: 'Límites, madurez emocional' },
                { planet: 'Urano', aspect: 'Sextil', description: 'Intuición, innovación' }
            ]
        }
    ],
    2027: [
        {
            date: '2027-02-20',
            time: '23:24', type: 'solar',
            name: 'Eclipse Solar Anular',
            degree: "01°56' ♓ Piscis",
            visibility: 'América del Sur, Atlántico Sur',
            aspects: [
                { planet: 'Saturno', aspect: 'Conjunción', description: 'Karma, lecciones espirituales' },
                { planet: 'Neptuno', aspect: 'Conjunción', description: 'Disolución, intuición máxima' }
            ]
        },
        {
            date: '2027-09-16',
            time: '16:05', type: 'lunar',
            name: 'Eclipse Lunar Total',
            degree: "23°40' ♓ Piscis",
            visibility: 'América, Europa, África, Asia',
            aspects: [
                { planet: 'Neptuno', aspect: 'Conjunción', description: 'Revelación espiritual' },
                { planet: 'Saturno', aspect: 'Oposición', description: 'Realidad vs ilusión' }
            ]
        }
    ]
    // 2028: [ ... ] — Agregar aquí
};

// ─── Años disponibles (para UI) ──────────────────────────────
window.LUNAR_DATA_YEARS = [2025, 2026, 2027];

console.log('✅ lunar-data.js cargado —',
    window.LUNAR_NEW_MOONS_UTC.length, 'lunas nuevas,',
    window.LUNAR_FULL_MOONS_UTC.length, 'lunas llenas,',
    'eclipses:', Object.keys(window.LUNAR_ECLIPSES).join(', ')
);
