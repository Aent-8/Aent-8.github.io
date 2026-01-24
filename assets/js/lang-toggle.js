(function() {
  const storageKey = 'siteLang';
  const defaultLang = 'zh';
  const labelElId = 'lang-toggle-label';

  function getSaved() {
    if (typeof window === 'undefined') return defaultLang;
    const saved = localStorage.getItem(storageKey);
    return saved === 'en' || saved === 'zh' ? saved : defaultLang;
  }

  function updateDom(lang) {
    const html = document.documentElement;
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    const labelEl = document.getElementById(labelElId);
    if (labelEl) {
      labelEl.textContent = lang === 'zh' ? '中文 / EN' : 'EN / 中文';
    }

    // Optional: lightweight client-side swapping for elements that provide both strings.
    const nodes = document.querySelectorAll('.lang-switchable');
    nodes.forEach((el) => {
      const text = lang === 'zh' ? el.dataset.i18nZh : el.dataset.i18nEn;
      if (text) el.textContent = text;
    });
  }

  function setLang(lang) {
    const next = lang === 'zh' ? 'zh' : 'en';
    localStorage.setItem(storageKey, next);
    updateDom(next);
  }

  function getAlternateUrl(targetLang) {
    const path = window.location.pathname || '/';
    const hasEnPrefix = path === '/en' || path.startsWith('/en/');

    // Current site strategy:
    // - Chinese: normal routes e.g. /, /publications/
    // - English: prefixed routes e.g. /en/, /en/publications/
    if (targetLang === 'en') {
      if (hasEnPrefix) return path;
      return path === '/' ? '/en/' : `/en${path}`;
    }

    // target zh
    if (!hasEnPrefix) return path;
    const stripped = path.replace(/^\/en\/?/, '/');
    return stripped === '' ? '/' : stripped;
  }

  function toggleLang() {
    const current = getSaved();
    const next = current === 'zh' ? 'en' : 'zh';
    setLang(next);

    // Navigate to the corresponding language page so the whole content changes.
    const targetUrl = getAlternateUrl(next);
    if (targetUrl && targetUrl !== window.location.pathname) {
      window.location.assign(targetUrl + window.location.search + window.location.hash);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateDom(getSaved());
    const toggleBtn = document.querySelector('[data-lang-toggle]');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleLang();
      });
    }
  });
})();
