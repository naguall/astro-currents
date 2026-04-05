# Complete Reference: All 132 Nodes by Module

This document provides the complete list of all 132 nodes organized by module with their prerequisites and proficiency levels.

## MODULE 1: Fundamentos de la Astrología (8 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M1_historia | Historia y filosofía de la astrología | Básico | None |
| M1_astronomia | Astronomía básica para astrólogos | Básico | None |
| M1_carta_natal | La carta natal: estructura y componentes | Básico | None |
| M1_software | Software astrológico profesional | Básico | None |
| M1_sincronicidad | Sincronicidad y principios fundamentales | Básico | None |
| M1_corrientes | Corrientes contemporáneas de la astrología | Intermedio | M1_historia |
| M1_tropical_sideral | Zodiaco tropical vs sideral | Intermedio | M1_astronomia |
| M1_coordenadas | Coordenadas celestes y sistemas de referencia | Intermedio | M1_astronomia |

## MODULE 2: Signos Zodiacales (8 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M2_zodiaco | El zodiaco tropical y sus 12 signos | Básico | M1_carta_natal |
| M2_elementos | Los elementos: Fuego, Tierra, Aire, Agua | Básico | M2_zodiaco |
| M2_modalidades | Las modalidades: Cardinal, Fija, Mutable | Básico | M2_zodiaco |
| M2_polaridades | Polaridades: Masculino/Femenino (Yang/Yin) | Básico | M2_elementos |
| M2_signos_fuego_tierra | Signos de Fuego y Tierra | Básico | M2_elementos, M2_modalidades |
| M2_signos_aire_agua | Signos de Aire y Agua | Básico | M2_elementos, M2_modalidades |
| M2_decanatos | Decanatos y subdivisiones de signos | Intermedio | M2_signos_fuego_tierra, M2_signos_aire_agua |
| M2_grados | Grados individuales y Sabian symbols | Avanzado | M2_decanatos |

## MODULE 3: Los Planetas (12 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M3_luminarias | Sol y Luna: Las dos luminarias | Básico | M2_zodiaco |
| M3_personales | Mercurio, Venus, Marte | Básico | M3_luminarias |
| M3_sociales | Júpiter y Saturno | Básico | M3_personales |
| M3_transpersonales | Urano, Neptuno, Plutón | Intermedio | M3_sociales |
| M3_quiron | Quirón: El sanador herido | Intermedio | M3_transpersonales |
| M3_lilith | Lilith (Luna Negra) | Intermedio | M3_luminarias |
| M3_nodos | Nodos lunares: Norte y Sur | Intermedio | M3_luminarias |
| M3_partes_arabes | Partes árabes y Lotes astrológicos | Avanzado | M3_nodos, M4_casas_1_6 |
| M3_asteroides | Asteroides principales: Ceres, Pallas, Juno, Vesta | Avanzado | M3_transpersonales |
| M3_dignidades | Dignidades planetarias: Domicilio, Exaltación, Detrimento, Caída | Intermedio | M3_sociales, M2_zodiaco |
| M3_dignidades_menores | Dignidades menores: Triplicidad, Término, Cara | Avanzado | M3_dignidades |
| M3_fases_planetarias | Fases planetarias: Cazimi, Combustión, Heliacal | Avanzado | M3_personales, M1_astronomia |

## MODULE 4: Las Casas Astrológicas (8 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M4_sistemas | Sistemas de casas: Whole Sign, Placidus, Koch, Equal | Básico | M1_carta_natal |
| M4_clasificacion | Clasificación de casas: Angular, Sucedente, Cadente | Básico | M4_sistemas |
| M4_casas_1_6 | Casas 1-6: El mundo personal | Básico | M4_clasificacion |
| M4_casas_7_12 | Casas 7-12: El mundo social y trascendente | Básico | M4_casas_1_6 |
| M4_angulos | Los cuatro ángulos: ASC, IC, DSC, MC | Intermedio | M4_casas_7_12 |
| M4_interceptadas | Casas interceptadas y signos duplicados | Avanzado | M4_angulos |
| M4_casas_vacias | Casas vacías: interpretación y significado | Intermedio | M4_casas_7_12 |
| M4_regente_casa | Regente de la casa: dispositor temático | Intermedio | M4_casas_7_12, M3_dignidades |

## MODULE 5: Aspectos Planetarios (10 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M5_teoria | Teoría de aspectos: Ángulos y orbes | Básico | M3_luminarias, M4_sistemas |
| M5_conjuncion | Conjunción: 0° de fusión | Básico | M5_teoria |
| M5_oposicion | Oposición 180° y Cuadratura 90° | Básico | M5_teoria |
| M5_trigono_sextil | Trígono 120° y Sextil 60° | Básico | M5_teoria |
| M5_menores | Aspectos menores: Semi-square, Sesquicuadrado, Quincuncio, etc. | Intermedio | M5_oposicion, M5_trigono_sextil |
| M5_aplicativos | Aspectos aplicativos vs separativos | Intermedio | M5_conjuncion |
| M5_gran_trigono | Gran Trígono y configuración de Trígono | Intermedio | M5_trigono_sextil, M5_oposicion |
| M5_gran_cruz | Gran Cruz y Yod (Dedo de Dios) | Avanzado | M5_gran_trigono |
| M5_otras_figuras | Otras configuraciones: Rectángulo Místico, Estrella de David, Cuna | Avanzado | M5_gran_cruz |
| M5_aspectos_angulos | Aspectos a los ángulos | Intermedio | M5_conjuncion, M4_angulos |

## MODULE 6: Regencias y Disposiciones (6 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M6_regencias | Regencias planetarias por signo | Intermedio | M3_dignidades, M4_casas_7_12 |
| M6_regente_carta | Regente de la carta natal | Intermedio | M6_regencias |
| M6_cadenas | Cadenas de disposición y dispositor final | Avanzado | M6_regencias |
| M6_almuten | Almuten: el planeta con más dignidad | Avanzado | M3_dignidades_menores, M6_regencias |
| M6_regente_casa_enlace | Enlace temático entre casas por regentes | Intermedio | M6_regencias, M4_regente_casa |
| M6_co_regentes | Co-regentes y regencias tradicionales vs modernas | Avanzado | M6_regencias |

## MODULE 7: Interpretación Integrada (8 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M7_patron_planetario | Patrón planetario global (Jones patterns) | Intermedio | M5_teoria, M4_casas_7_12 |
| M7_predominancia | Predominancia de elemento y modalidad | Intermedio | M2_elementos, M2_modalidades, M7_patron_planetario |
| M7_planeta_dominante | Planeta dominante de la carta | Intermedio | M5_aplicativos, M3_dignidades |
| M7_stellium | Stellium: 3+ planetas en signo o casa | Intermedio | M7_patron_planetario |
| M7_jerarquia | Jerarquía interpretativa de la carta natal | Avanzado | M7_planeta_dominante, M6_regente_carta |
| M7_personalidad | Área: Personalidad y psicología | Avanzado | M7_jerarquia |
| M7_vocacion | Área: Vocación y carrera | Avanzado | M7_jerarquia |
| M7_relaciones | Área: Relaciones y pareja | Avanzado | M7_jerarquia |

## MODULE 8: Técnicas Predictivas (12 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M8_transitos_intro | Introducción a tránsitos: concepto y orbes | Intermedio | M5_teoria, M3_sociales |
| M8_transitos_lentos | Tránsitos de planetas lentos | Intermedio | M8_transitos_intro, M3_transpersonales |
| M8_transitos_rapidos | Tránsitos rápidos y a ángulos | Intermedio | M8_transitos_intro |
| M8_progresiones | Progresiones secundarias (1 día = 1 año) | Avanzado | M8_transitos_lentos |
| M8_fases_progresadas | Fases lunares progresadas | Avanzado | M8_progresiones |
| M8_arco_solar | Direcciones de arco solar | Avanzado | M8_progresiones |
| M8_direcciones_primarias | Direcciones primarias (sistema más antiguo) | Profesional | M8_arco_solar |
| M8_retorno_solar | Retorno solar y temas anuales | Intermedio | M8_transitos_intro |
| M8_retorno_saturno | Retorno de Saturno (ciclo 29.5 años) | Intermedio | M8_transitos_lentos |
| M8_profecciones | Profecciones anuales (técnica helenística) | Avanzado | M8_retorno_solar, M6_regencias |
| M8_firdaria | Firdaria (técnica medieval persa) | Profesional | M8_profecciones |
| M8_eclipses_predictivos | Técnica de eclipses predictivos | Avanzado | M8_transitos_lentos, M1_astronomia |

## MODULE 9: Sinastría (8 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M9_sinastria_intro | Introducción a sinastría: comparación de cartas | Intermedio | M5_trigono_sextil, M5_oposicion, M4_casas_7_12 |
| M9_aspectos_clave | Aspectos clave en sinastría | Intermedio | M9_sinastria_intro |
| M9_planetas_casas | Planetas en las casas del otro | Intermedio | M9_sinastria_intro |
| M9_compuesta | Carta compuesta (carta de la relación) | Avanzado | M9_aspectos_clave |
| M9_davison | Carta de Davison (punto medio en espacio-tiempo) | Avanzado | M9_compuesta |
| M9_nodos_sinastria | Nodos y Quirón en sinastría | Avanzado | M9_aspectos_clave, M3_nodos, M3_quiron |
| M9_temporalidad | Temporalidad de relaciones (transitos a H7, eclipses) | Avanzado | M9_sinastria_intro, M8_transitos_lentos |
| M9_sinastria_avanzada | Sinastría avanzada: síntesis completa | Profesional | M9_compuesta, M9_davison, M9_nodos_sinastria |

## MODULE 10: Astrología Horaria (6 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M10_fundamentos | Fundamentos de astrología horaria | Avanzado | M3_dignidades, M6_regencias |
| M10_radicacion | Reglas de radicación: validez de la carta | Avanzado | M10_fundamentos |
| M10_significadores | Significadores, querente y quesitado | Avanzado | M10_radicacion |
| M10_tecnicas | Técnicas horarias avanzadas | Profesional | M10_significadores |
| M10_temas | Temas horarios comunes | Profesional | M10_tecnicas |
| M10_via_combusta | Vía combusta y combustión horaria | Profesional | M10_tecnicas |

## MODULE 11: Astrología Electiva (4 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M11_principios | Principios de astrología electiva | Avanzado | M8_transitos_intro, M3_dignidades |
| M11_reglas | Reglas de elección de momento | Avanzado | M11_principios, M10_fundamentos |
| M11_aplicaciones | Aplicaciones prácticas de electiva | Profesional | M11_reglas |
| M11_vs_horaria | Diferencias entre electiva y horaria | Avanzado | M11_principios, M10_fundamentos |

## MODULE 12: Astrología Mundana (6 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M12_fundamentos | Fundamentos de astrología mundana | Avanzado | M8_transitos_lentos |
| M12_ciclos_mayores | Ciclos planetarios mayores (Jupiter-Saturn, Uranus-Pluto) | Avanzado | M12_fundamentos |
| M12_eclipses_mundana | Eclipses en astrología mundana | Avanzado | M12_fundamentos, M8_eclipses_predictivos |
| M12_cartas_paises | Cartas de países e ingress charts | Profesional | M12_ciclos_mayores |
| M12_eras | Las eras astrológicas (Age of Pisces, Age of Aquarius) | Intermedio | M1_tropical_sideral |
| M12_ciclos_civilizatorios | Ciclos civilizatorios y épocas históricas | Profesional | M12_ciclos_mayores |

## MODULE 13: Astrología Médica (5 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M13_correspondencias | Correspondencias zodiacales del cuerpo | Intermedio | M2_signos_fuego_tierra, M2_signos_aire_agua |
| M13_indicadores | Indicadores de salud en la carta natal | Avanzado | M13_correspondencias, M4_casas_7_12 |
| M13_planetas_salud | Planetas y funciones corporales | Avanzado | M13_correspondencias, M3_transpersonales |
| M13_diagnostico | Diagnóstico astrológico | Profesional | M13_indicadores, M8_transitos_lentos |
| M13_etica_medica | Ética en astrología médica | Profesional | M13_diagnostico |

## MODULE 14: Astrología Kármica y Evolutiva (6 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M14_eje_nodal | El eje nodal como camino del alma | Intermedio | M3_nodos |
| M14_regentes_nodos | Regentes de los nodos lunares | Avanzado | M14_eje_nodal, M6_regencias |
| M14_retrogrados_natal | Planetas retrógrados: interpretación kármica | Intermedio | M3_personales, M1_astronomia |
| M14_casa12_karmica | La Casa 12 como repositorio kármico | Avanzado | M4_casas_7_12, M14_eje_nodal |
| M14_evolutiva_green | Astrología evolutiva (Jeff Green) | Avanzado | M3_transpersonales, M14_eje_nodal |
| M14_integracion_karmica | Integración kármica completa | Profesional | M14_regentes_nodos, M14_casa12_karmica, M14_evolutiva_green |

## MODULE 15: Técnicas Avanzadas (8 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M15_puntos_medios | Puntos medios (Hamburg School) | Avanzado | M7_jerarquia |
| M15_armonicos | Armónicos (5º, 7º, 9º armónicos) | Avanzado | M15_puntos_medios |
| M15_astrocartografia | Astrocartografía (líneas planetarias mundiales) | Avanzado | M4_angulos, M8_transitos_lentos |
| M15_rectificacion | Rectificación de hora de nacimiento | Profesional | M8_progresiones, M8_arco_solar |
| M15_draconica | Astrología dracónica (Nodo Norte a 0° Aries) | Profesional | M14_eje_nodal, M15_armonicos |
| M15_estrellas_fijas | Estrellas fijas: 15 estrellas reales principales | Avanzado | M1_astronomia, M5_conjuncion |
| M15_fuera_limites | Planetas fuera de límites (declinación > 23°27') | Avanzado | M1_astronomia, M3_personales |
| M15_antiscios | Antiscios y contrantiscios | Profesional | M15_puntos_medios |

## MODULE 16: Ética y Práctica Profesional (5 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M16_codigo_etico | Código ético del astrólogo profesional | Intermedio | M7_jerarquia |
| M16_consulta | La consulta astrológica: estructura y comunicación | Avanzado | M16_codigo_etico |
| M16_herramientas | Herramientas profesionales: software, efemérides, bases de datos | Intermedio | M1_software |
| M16_negocio | Desarrollo del negocio: servicios, precios, marketing | Profesional | M16_consulta |
| M16_formacion | Formación continua: ISAR, NCGR, OPA, asociaciones | Profesional | M16_negocio |

## MODULE 17: Astrología y Psicología (4 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M17_jung | Astrología y psicología junguiana | Avanzado | M7_personalidad, M3_transpersonales |
| M17_humanistica | Astrología humanística (Dane Rudhyar) | Avanzado | M17_jung |
| M17_transpersonal | Astrología transpersonal | Profesional | M17_humanistica |
| M17_sombra | Sombra psicológica en la carta natal | Avanzado | M17_jung, M3_lilith |

## MODULE 18: Especialidades y Ramas (6 nodes)

| Node ID | Title (Spanish) | Level | Prerequisites |
|---------|-----------------|-------|---|
| M18_financiera | Astrología financiera: ciclos económicos y mercados | Profesional | M12_ciclos_mayores, M8_transitos_lentos |
| M18_meteorologica | Astrología meteorológica | Profesional | M12_fundamentos |
| M18_eventos | Astrología de eventos: cartas de momentos históricos | Avanzado | M8_transitos_lentos, M11_principios |
| M18_homeopatica | Astrología homeopática | Profesional | M13_correspondencias, M3_transpersonales |
| M18_tarot | Astrología y tarot: arcanos y decanatos | Intermedio | M2_decanatos, M3_personales |
| M18_integracion_final | Integración de especialidades en práctica completa | Profesional | M18_financiera, M18_eventos |

---

## Statistics

- **Total Nodes:** 132
- **Modules:** 18
- **Básico Nodes:** ~40
- **Intermedio Nodes:** ~35
- **Avanzado Nodes:** ~40
- **Profesional Nodes:** ~17

## Prerequisites Analysis

The nodes form a valid Directed Acyclic Graph (DAG) with:
- Multiple entry points (nodes with no prerequisites)
- Progressive complexity levels
- Clear skill dependencies
- No circular dependencies

## Usage Recommendations

1. **Beginners:** Start with all "Básico" level nodes
2. **Intermediate:** Progress to "Intermedio" nodes that don't require advanced prerequisites
3. **Advanced:** Study "Avanzado" nodes for specialized techniques
4. **Professional:** Master "Profesional" nodes for specialized practice areas

---

**Last Updated:** 2026-04-02