(() => {
  const STORAGE_KEY = 'chevron-seven.watch.v1';

  const load = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };

  const save = (keys) => {
    const unique = [...new Set(keys)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unique));
    window.dispatchEvent(new CustomEvent('chevron-watch-change', { detail: unique }));
    return unique;
  };

  const watched = (key) => load().includes(key);
  const mark = (key, value = true) => {
    const current = load();
    return save(value ? [...current, key] : current.filter((item) => item !== key));
  };
  const markThrough = (keys) => save([...load(), ...keys]);
  const clear = () => save([]);

  window.ChevronWatch = { load, save, watched, mark, markThrough, clear, storageKey: STORAGE_KEY };
})();
