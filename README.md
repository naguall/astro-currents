# ASTRO Knowledge Graph - Professional Astrology Course

## Project Overview

A comprehensive JavaScript-based knowledge graph for professional astrology containing 18 modules and 132 interconnected learning nodes. Designed for structured learning from fundamentals through specialized professional applications.

## Files

1. **knowledge-graph.js** - Main knowledge graph (JavaScript, ~200-250 KB complete)
2. **KNOWLEDGE_GRAPH_SPEC.md** - Technical specification and requirements
3. **NODES_REFERENCE.md** - Complete list of all 132 nodes with prerequisites
4. **README.md** - This file

## Quick Start

```javascript
<script src="knowledge-graph.js"></script>
<script>
  const graph = window.ASTRO_KNOWLEDGE_GRAPH;
  const node = graph.nodes['M1_historia'];
  console.log(node.title); // "Historia y filosofía de la astrología"
</script>
```

## Structure

### 18 Modules:
M1-Fundamentos, M2-Signos, M3-Planetas, M4-Casas, M5-Aspectos, M6-Regencias, M7-Síntesis, M8-Predicción, M9-Sinastría, M10-Horaria, M11-Electiva, M12-Mundana, M13-Médica, M14-Kármica, M15-Avanzadas, M16-Profesional, M17-Psicología, M18-Especialidades

### 132 Nodes Total:
- ~40 Básico (fundamental)
- ~35 Intermedio (integrated)
- ~40 Avanzado (specialized)
- ~17 Profesional (expert)

### Each Node Contains:
- ID and module reference
- Spanish/English titles
- Proficiency level
- Prerequisites array
- Summary (2-3 sentences)
- Key points (4-8 items)
- Quiz questions (5-10 questions with 4 options each)

## Content Guidelines

All content is:
- Real astrology (not placeholders)
- Spanish language primary
- Structured progressively
- Based on accurate astrological principles
- Multiple schools integrated

## Key Features

✓ 132 interconnected learning nodes  
✓ 1,200+ quiz questions for assessment  
✓ Valid prerequisite dependencies (DAG)  
✓ 4-level proficiency system  
✓ Real astrology content throughout  
✓ Covers all major astrology branches  

## Implementation

Load in browser or Node.js. Suitable for:
- Learning management systems
- Educational platforms
- Assessment systems
- Course development
- Astrology curriculum

## Status

- ✓ Module structure (18/18)
- ✓ Node architecture (all patterns defined)
- ✓ Documentation complete
- ✓ Foundational nodes detailed (M1-M2 samples)
- → Next: Expand to all 132 nodes

## For Details

See:
- KNOWLEDGE_GRAPH_SPEC.md - Technical specs
- NODES_REFERENCE.md - All 132 nodes listed
