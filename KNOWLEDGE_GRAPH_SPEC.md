# ASTRO_KNOWLEDGE_GRAPH - Complete Specification

## Overview
A comprehensive JavaScript-based knowledge graph for a professional astrology course with 18 modules and 132 knowledge nodes. All content is in Spanish with real astrology information. The file exports a global variable `ASTRO_KNOWLEDGE_GRAPH` accessible via browser or Node.js.

## File Structure

### Root Object: `window.ASTRO_KNOWLEDGE_GRAPH`

```javascript
{
  levels: { /* proficiency level definitions */ },
  modules: [ /* array of 18 module objects */ ],
  nodes: { /* object with 132 node definitions keyed by ID */ }
}
```

## Levels Definition

Four proficiency levels organize the curriculum:

```javascript
levels: {
  basico: { label: 'Básico', order: 0 },
  intermedio: { label: 'Intermedio', order: 1 },
  avanzado: { label: 'Avanzado', order: 2 },
  profesional: { label: 'Profesional', order: 3 }
}
```

## Module Structure (18 Total)

Each module contains:
- `id`: String like "M1", "M2", ... "M18"
- `title`: Spanish title
- `icon`: Single emoji representing the module
- `nodeIds`: Array of node IDs belonging to this module

Example:
```javascript
{
  id: 'M1',
  title: 'Fundamentos de la Astrología',
  icon: '🌟',
  nodeIds: ['M1_historia','M1_astronomia','M1_carta_natal',...]
}
```

### The 18 Modules:

1. **M1**: Fundamentos de la Astrología (8 nodes)
2. **M2**: Signos Zodiacales (8 nodes)
3. **M3**: Los Planetas (12 nodes)
4. **M4**: Las Casas Astrológicas (8 nodes)
5. **M5**: Aspectos Planetarios (10 nodes)
6. **M6**: Regencias y Disposiciones (6 nodes)
7. **M7**: Interpretación Integrada (8 nodes)
8. **M8**: Técnicas Predictivas (12 nodes)
9. **M9**: Sinastría (8 nodes)
10. **M10**: Astrología Horaria (6 nodes)
11. **M11**: Astrología Electiva (4 nodes)
12. **M12**: Astrología Mundana (6 nodes)
13. **M13**: Astrología Médica (5 nodes)
14. **M14**: Astrología Kármica y Evolutiva (6 nodes)
15. **M15**: Técnicas Avanzadas (8 nodes)
16. **M16**: Ética y Práctica Profesional (5 nodes)
17. **M17**: Astrología y Psicología (4 nodes)
18. **M18**: Especialidades y Ramas (6 nodes)

**Total: 132 nodes**

## Node Structure

Each node is a complete learning object with content and assessment:

```javascript
{
  id: 'M1_historia',              // Unique identifier
  moduleId: 'M1',                 // Parent module
  title: 'Historia y filosofía',  // Spanish title
  titleEn: 'History and Philosophy', // English title (optional)
  level: 'basico',                // 'basico'|'intermedio'|'avanzado'|'profesional'
  prerequisites: [],              // Array of node IDs that must be mastered first
  content: {
    summary: '...',               // 2-3 sentence overview in Spanish
    keyPoints: [                  // Array of 4-8 key learning points
      'Point 1',
      'Point 2',
      ...
    ]
  },
  questions: [                    // Array of 5-10 quiz questions
    {
      q: 'Question text',         // Question in Spanish
      options: [                  // Array of exactly 4 answer options
        'Option A',
        'Option B (correct)',
        'Option C',
        'Option D'
      ],
      correct: 1,                 // Index of correct answer (0-3)
      explanation: 'Why this is correct...' // Explanation in Spanish
    },
    // More questions...
  ]
}
```

## Content Guidelines

### Summary
- 2-3 sentences in Spanish
- Provides concise overview of node topic
- Should be accessible to beginners

### Key Points
- 4-8 bullet points per node
- Real astrology content (not placeholders)
- Progressive complexity within the node
- Include terminology, definitions, and applications

### Quiz Questions

Each node must have 5-10 questions:

**Question Format:**
- Spanish language
- Clear, unambiguous phrasing
- Tests understanding, not memorization

**Options:**
- Exactly 4 options per question
- One correct answer
- Plausible distractors
- Varying difficulty across questions

**Correct Answer:**
- Index 0-3 indicating which option is correct
- Varied distribution (not always same position)

**Explanation:**
- 1-2 sentences in Spanish
- Explains why the correct answer is right
- May address common misconceptions

## Prerequisites and Dependencies

Prerequisites form a valid Directed Acyclic Graph (DAG):
- No circular dependencies allowed
- Represent prerequisites accurately
- Enable progressive skill building

Example dependency chain:
```
M1_carta_natal (no prerequisites)
  ↓
M2_zodiaco (prereq: M1_carta_natal)
  ↓
M2_elementos (prereq: M2_zodiaco)
```

## Real Astrology Content Requirements

All content must reflect:
- Accurate astrological principles
- Standard terminology and concepts
- Multiple schools of thought where relevant
- Traditional and contemporary approaches
- Practical application examples

### Key Topics to Cover:

**Fundamentals (M1):**
- Mesopotamian/Babylonian origins
- Hellenistic period and Ptolemy
- Medieval Islamic transmission
- Renaissance revival
- Modern psychological astrology
- Jungian synchronicity
- Hermetic principles

**Signs (M2):**
- 12 signs with archetypal descriptions
- Elements: Fire, Earth, Air, Water
- Modalities: Cardinal, Fixed, Mutable
- Polarities: Masculine/Feminine
- Decanates: subdivisions and rulerships
- Individual degrees: Sabian symbols

**Planets (M3):**
- Sun, Moon: The luminaries
- Mercury, Venus, Mars: Personal planets
- Jupiter, Saturn: Social planets
- Uranus, Neptune, Pluto: Transpersonal
- Chiron, Lilith, Lunar Nodes
- Arabic Parts and asteroids
- Planetary dignities and phases

**Houses (M4):**
- Whole Sign, Placidus, Koch, Equal systems
- Angular, succedent, cadent houses
- Houses 1-6: Personal world
- Houses 7-12: Social/transcendent world
- Four angles (ASC, IC, DSC, MC)
- Intercepted signs and empty houses

**Aspects (M5):**
- Conjunction, opposition, square, trine, sextile
- Minor aspects and their meanings
- Applying vs separating aspects
- Aspect patterns: Grand Trine, T-Square, Grand Cross, Yod
- Aspects to angles

**Prediction (M8):**
- Transits and their interpretation
- Secondary progressions
- Solar arc directions
- Primary directions
- Solar and Saturn returns
- Annual profections
- Hellenistic firdaria
- Eclipse prediction techniques

**Synastry (M9):**
- Superposition of charts
- Key aspect combinations (Sun-Moon, Venus-Mars, etc.)
- Composite charts
- Davison relocation charts
- Nodal connections
- Temporal technique for relationship timing

## File Size and Performance

- Current structure: ~42 KB (with initial nodes)
- Full expansion (132 nodes): ~200-250 KB
- Loadable as single JavaScript file
- Suitable for browser-based learning platforms
- Can be minified for production

## Implementation Notes

### Usage in HTML:
```html
<script src="knowledge-graph.js"></script>
<script>
  const graph = window.ASTRO_KNOWLEDGE_GRAPH;
  const node = graph.nodes['M1_historia'];
  console.log(node.title); // "Historia y filosofía"
</script>
```

### Accessing Data:
```javascript
// Get all modules
const modules = ASTRO_KNOWLEDGE_GRAPH.modules;

// Get specific node
const node = ASTRO_KNOWLEDGE_GRAPH.nodes['M3_luminarias'];

// Get nodes by module
const m2Nodes = ASTRO_KNOWLEDGE_GRAPH.modules[1].nodeIds;

// Check prerequisites
const prereqs = node.prerequisites;
```

### Validation:
- All node IDs must be unique
- All prerequisites must exist as valid node IDs
- All module nodeIds must reference existing nodes
- No circular prerequisites allowed
- Question correct indices must be 0-3

## Completion Checklist

To create the full 132-node knowledge graph:

- [ ] Complete M1 Fundamentos (8 nodes with all content)
- [ ] Complete M2 Signos (8 nodes)
- [ ] Complete M3 Planetas (12 nodes)
- [ ] Complete M4 Casas (8 nodes)
- [ ] Complete M5 Aspectos (10 nodes)
- [ ] Complete M6 Regencias (6 nodes)
- [ ] Complete M7 Interpretación (8 nodes)
- [ ] Complete M8 Predicción (12 nodes)
- [ ] Complete M9 Sinastría (8 nodes)
- [ ] Complete M10 Horaria (6 nodes)
- [ ] Complete M11 Electiva (4 nodes)
- [ ] Complete M12 Mundana (6 nodes)
- [ ] Complete M13 Médica (5 nodes)
- [ ] Complete M14 Kármica (6 nodes)
- [ ] Complete M15 Avanzadas (8 nodes)
- [ ] Complete M16 Profesional (5 nodes)
- [ ] Complete M17 Psicología (4 nodes)
- [ ] Complete M18 Especialidades (6 nodes)
- [ ] Validate all prerequisites form valid DAG
- [ ] Test all questions have valid indices
- [ ] Verify Spanish grammar and terminology
- [ ] Check astrology content accuracy

## Current Status

The file `knowledge-graph.js` has been created with:
- Complete module definitions (18 modules)
- Foundational nodes from M1 and M2 with full content (5 nodes)
- Structure and patterns for all remaining nodes
- Proper export as global JavaScript variable

To expand: Add remaining 127 nodes following the identical pattern shown in existing nodes, ensuring all fields are populated with real astrology content and comprehensive quiz questions.

## Next Steps for Expansion

1. Add remaining nodes for M1 (M1_software, M1_sincronicidad, M1_corrientes, M1_tropical_sideral, M1_coordenadas)
2. Continue with M2 remaining nodes (M2_elementos, M2_modalidades, M2_polaridades, etc.)
3. Progress through modules systematically
4. Validate prerequisites form proper dependency graph
5. Test file loads without JavaScript errors
6. Verify all astrology content accuracy

---

**File Location:** `/sessions/admiring-optimistic-babbage/mnt/SILENT RIVER/MOON TRACKER CLAUDE SPACE/moon_tracker_complete/knowledge-graph.js`

**Created:** 2026-04-02

**Total Nodes Target:** 132

**Language:** Spanish (with optional English titles)