(() => {
  const episodeContextLocks = {
    '/episodes/s03e03-fair-game/': {
      selector: '.bigger-picture-full',
      key: 'sg1:3:22',
      label: 'Deeper context unlocks after SG-1 · S03E22 — Nemesis.'
    }
  };

  const ensureLock = (node, label) => {
    let lock = node.previousElementSibling;
    if (!lock || !lock.classList.contains('progress-lock')) {
      lock = document.createElement('div');
      lock.className = 'progress-lock';
      lock.innerHTML = `<span class="progress-lock-mark">◇</span><div><strong>Archive layer locked</strong><span></span></div>`;
      node.parentNode.insertBefore(lock, node);
    }
    lock.querySelector('span:last-child').textContent = label;
    return lock;
  };

  const gateNode = (node, key, label) => {
    if (!window.ChevronWatch || !key) return;
    const lock = ensureLock(node, label);
    const render = () => {
      const unlocked = window.ChevronWatch.watched(key);
      node.hidden = !unlocked;
      lock.hidden = unlocked;
    };
    window.addEventListener('chevron-watch-change', render);
    render();
  };

  const run = () => {
    document.querySelectorAll('[data-progress-key]').forEach((node) => {
      gateNode(node, node.dataset.progressKey, node.dataset.progressLabel || 'Continue the canonical watch order to unlock this archive layer.');
    });

    const route = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`;
    const config = episodeContextLocks[route];
    if (config) {
      const node = document.querySelector(config.selector);
      if (node) gateNode(node, config.key, config.label);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
