/**
 * Toolsmonger board renderer
 * --------------------------
 * All tool data comes from tools.json — nothing about a specific tool
 * (id, name, url, description, icon, status, order, category) is
 * hardcoded in this file. If tools.json is missing, empty, or fails to
 * load, the board simply renders empty.
 *
 * Icon shapes come from icons.js (TOOL_ICONS), loaded before this file.
 */

const board = document.getElementById('board');
const toolCount = document.getElementById('toolCount');

const wbTitle = document.getElementById('wbTitle');
const wbDesc = document.getElementById('wbDesc');

const overlay = document.getElementById('overlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalGo = document.getElementById('modalGo');

// Desktop/mouse gets hover + direct links. Touch devices get a tap-to-open dialog,
// since there's no hover to preview the description with first.
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
document.body.classList.toggle('no-hover', !canHover);

/**
 * Builds the icon markup for a tool entry. Priority order:
 *   1. iconUrl      -> an actual image/logo
 *   2. icon: custom -> the tool's own iconSvg shape
 *   3. icon: <key>   -> a shape from the TOOL_ICONS library (icons.js)
 */
function iconMarkup(tool) {
  if (tool.iconUrl) {
    return `<img class="icon" src="${tool.iconUrl}" alt="" />`;
  }
  if (tool.icon === 'custom' && tool.iconSvg) {
    return `<svg class="icon" viewBox="0 0 100 100">${tool.iconSvg}</svg>`;
  }
  const shape = (typeof TOOL_ICONS !== 'undefined' && TOOL_ICONS[tool.icon]) || '';
  return `<svg class="icon" viewBox="0 0 100 100">${shape}</svg>`;
}

function openModal(tool) {
  modalIcon.innerHTML = iconMarkup(tool);
  modalTitle.textContent = tool.name;
  modalDesc.textContent = tool.description;

  if (tool.status === 'live') {
    modalGo.href = tool.url;
    modalGo.classList.remove('disabled');
    modalGo.textContent = 'Go to tool →';
  } else {
    modalGo.href = '#';
    modalGo.classList.add('disabled');
    modalGo.textContent = 'Not live yet';
  }

  overlay.classList.add('open');
}

document.getElementById('closeModal').addEventListener('click', () => {
  overlay.classList.remove('open');
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.classList.remove('open');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    overlay.classList.remove('open');
  }
});

/**
 * Renders the pegboard from an array of tool config objects.
 * An empty (or missing) array renders an empty board — no placeholder
 * sample tools are ever substituted in.
 */
function render(rawTools) {
  const tools = (rawTools || [])
    .map((tool, index) => ({ ...tool, _originalIndex: index }))
    .sort((a, b) => (a.order ?? a._originalIndex) - (b.order ?? b._originalIndex));

  toolCount.textContent = tools.length + (tools.length === 1 ? ' tool' : ' tools');

  if (tools.length === 0) {
    board.classList.add('empty');
    board.innerHTML = 'No tools configured yet.';
    return;
  }

  board.classList.remove('empty');

  board.innerHTML = tools.map((tool, index) => {
    const icon = iconMarkup(tool);
    const isLive = tool.status === 'live';

    let tagMarkup;
    if (canHover) {
      // Desktop: the tag is a direct link — one click goes straight to the tool.
      tagMarkup = isLive
        ? `<a class="tag" href="${tool.url}" target="_blank" rel="noopener">
             ${icon}
             <span class="name">${tool.name}</span>
           </a>`
        : `<div class="tag">
             ${icon}
             <span class="name">${tool.name}</span>
           </div>`;
    } else {
      // Touch: the tag opens the dialog first, since hover isn't available to preview.
      tagMarkup = `<button class="tag" data-index="${index}">
                     ${icon}
                     <span class="name">${tool.name}</span>
                   </button>`;
    }

    return `
      <div class="slot ${isLive ? '' : 'wip'}" data-index="${index}">
        <div class="hook"></div>
        <div class="string"></div>
        ${tagMarkup}
      </div>`;
  }).join('');

  if (canHover) {
    document.querySelectorAll('.slot').forEach((slot, index) => {
      slot.addEventListener('mouseenter', () => {
        const tool = tools[index];
        wbTitle.textContent = tool.name + (tool.status === 'wip' ? ' — in the works' : '');
        wbDesc.textContent = tool.description;
      });
    });
  } else {
    document.querySelectorAll('.tag[data-index]').forEach((button) => {
      button.addEventListener('click', () => {
        const tool = tools[parseInt(button.dataset.index, 10)];
        openModal(tool);
      });
    });
  }
}

fetch('tools.json')
  .then((response) => {
    if (!response.ok) throw new Error('tools.json not found');
    return response.json();
  })
  .then(render)
  .catch(() => render([]));
