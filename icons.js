/**
 * Toolsmonger icon library
 * ------------------------
 * Each entry is raw SVG shape markup (paths, circles, lines) drawn inside
 * a 100 x 100 viewBox. These are plain line-art shapes, not images —
 * they inherit color from CSS (`stroke: var(--ink)`), so they always
 * match the current theme with no separate asset to manage.
 *
 * To add a new built-in icon: add a key here, then reference it from
 * tools.json as `"icon": "yourKeyName"`.
 *
 * Tools can also skip this file entirely by using:
 *   - "icon": "custom", "iconSvg": "<path .../>"   (inline custom shape)
 *   - "iconUrl": "https://.../logo.svg"            (an actual image/logo)
 */

const TOOL_ICONS = {

  stopwatch: `
    <circle cx="50" cy="56" r="34" />
    <line x1="50" y1="10" x2="50" y2="20" />
    <line x1="40" y1="8"  x2="60" y2="8" />
    <line x1="50" y1="56" x2="50" y2="36" />
    <line x1="50" y1="56" x2="66" y2="56" />
  `,

  growth: `
    <line x1="15" y1="85" x2="15" y2="15" />
    <line x1="15" y1="85" x2="88" y2="85" />
    <polyline points="22,70 40,55 55,60 72,30 85,20" />
  `,

  wrench: `
    <path d="M70 20
             a15 15 0 1 0 10 10
             L45 65
             a10 10 0 1 0 -10 10
             L70 40" />
  `,

  ruler: `
    <rect x="12" y="35" width="76" height="24" rx="3" />
    <line x1="24" y1="35" x2="24" y2="45" />
    <line x1="36" y1="35" x2="36" y2="45" />
    <line x1="48" y1="35" x2="48" y2="45" />
    <line x1="60" y1="35" x2="60" y2="45" />
    <line x1="72" y1="35" x2="72" y2="45" />
  `,

  calculator: `
    <rect x="22" y="10" width="56" height="80" rx="6" />
    <line x1="30" y1="26" x2="70" y2="26" />
    <circle cx="34" cy="44" r="4" />
    <circle cx="50" cy="44" r="4" />
    <circle cx="66" cy="44" r="4" />
    <circle cx="34" cy="60" r="4" />
    <circle cx="50" cy="60" r="4" />
    <circle cx="66" cy="60" r="4" />
    <circle cx="34" cy="76" r="4" />
    <circle cx="50" cy="76" r="4" />
    <circle cx="66" cy="76" r="4" />
  `,

  checklist: `
    <rect x="16" y="12" width="68" height="76" rx="5" />
    <polyline points="28,32 34,38 44,26" />
    <line x1="52" y1="32" x2="72" y2="32" />
    <polyline points="28,54 34,60 44,48" />
    <line x1="52" y1="54" x2="72" y2="54" />
    <polyline points="28,76 34,82 44,70" />
    <line x1="52" y1="76" x2="72" y2="76" />
  `,

  compass: `
    <circle cx="50" cy="50" r="36" />
    <polygon points="58,32 44,50 42,68 56,50" />
  `,

  gear: `
    <circle cx="50" cy="50" r="14" />
    <path d="M50 8  v10
             M50 82 v10
             M8  50 h10
             M82 50 h10
             M20 20 l7 7
             M73 73 l7 7
             M80 20 l-7 7
             M27 73 l-7 7" />
  `,
 
  // Testing / QA tools
  testTube: `
    <path d="M38 15
             L38 65
             a12 12 0 0 0 24 0
             L62 15" />
    <line x1="34" y1="15" x2="66" y2="15" />
    <line x1="38" y1="50" x2="62" y2="50" />
    <circle cx="45" cy="40" r="2" />
    <circle cx="55" cy="34" r="2" />
  `,
 
  // Data visualization / dashboard tools
  charts: `
    <line x1="15" y1="85" x2="85" y2="85" />
    <rect x="25" y="55" width="14" height="30" />
    <rect x="45" y="32" width="14" height="53" />
    <rect x="65" y="45" width="14" height="40" />
  `,
 
  // Housing / property / real-estate investment tools
  house: `
    <path d="M50 14
             L86 46
             L76 46
             L76 86
             L24 86
             L24 46
             L14 46
             Z" />
    <rect x="30" y="50" width="12" height="12" />
    <rect x="43" y="62" width="14" height="24" />
  `,
 
  // Prayer times / Islamic calendar tools
  crescentMoon: `
    <path d="M50 10
             A40 40 0 1 0 50 90
             A32 32 0 1 1 50 10
             Z" />
    <path d="M76 26 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z" />
  `,
 
  // Data comparison / tabular result tools
  tables: `
    <rect x="15" y="20" width="70" height="60" rx="3" />
    <line x1="15" y1="40" x2="85" y2="40" />
    <line x1="15" y1="60" x2="85" y2="60" />
    <line x1="41" y1="20" x2="41" y2="80" />
    <line x1="59" y1="20" x2="59" y2="80" />
  `,
 
  // Data triage / diagnostic tools
  stethoscope: `
    <path d="M32 12
             v24
             a18 18 0 0 0 18 18" />
    <path d="M68 12
             v24
             a18 18 0 0 1 -18 18" />
    <line x1="50" y1="54" x2="50" y2="68" />
    <circle cx="50" cy="80" r="10" />
    <circle cx="50" cy="80" r="3" />
  `,

  // Side-by-side comparison tools
  compare: `
    <path d="M25 12
             L25 62
             a10 10 0 0 0 20 0
             L45 12" />
    <line x1="21" y1="12" x2="49" y2="12" />
    <line x1="25" y1="52" x2="45" y2="52" />
    <path d="M55 26
             L55 62
             a10 10 0 0 0 20 0
             L75 26" />
    <line x1="51" y1="26" x2="79" y2="26" />
    <line x1="55" y1="40" x2="75" y2="40" />
  `,

  // Speed / performance measurement tools
  speedometer: `
    <path d="M14 66
             a36 36 0 1 1 72 0" />
    <line x1="14" y1="66" x2="22" y2="66" />
    <line x1="78" y1="66" x2="86" y2="66" />
    <line x1="50" y1="22" x2="50" y2="30" />
    <line x1="26" y1="66" x2="32" y2="60" />
    <line x1="74" y1="66" x2="68" y2="60" />
    <line x1="50" y1="66" x2="66" y2="42" />
    <circle cx="50" cy="66" r="5" />
  `,

  // Time / schedule tools
  wallclock: `
    <circle cx="50" cy="40" r="26" />
    <line x1="50" y1="14" x2="50" y2="18" />
    <line x1="50" y1="58" x2="50" y2="62" />
    <line x1="24" y1="40" x2="28" y2="40" />
    <line x1="72" y1="40" x2="76" y2="40" />
    <line x1="50" y1="40" x2="50" y2="26" />
    <line x1="50" y1="40" x2="62" y2="40" />
    <circle cx="50" cy="40" r="3" />
    <path d="M36 62 L64 62 L64 84 a14 14 0 0 1 -28 0 Z" />
    <line x1="50" y1="62" x2="50" y2="76" />
    <circle cx="50" cy="80" r="5" />
  `

};
