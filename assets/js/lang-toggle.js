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

  function toggleLang() {
    const current = getSaved();
    setLang(current === 'zh' ? 'en' : 'zh');
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
