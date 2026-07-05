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
  `

};
