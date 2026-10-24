import { translations, type Language } from './translations';

const STORAGE_KEY = 'anujin_lang';

export function getCurrentLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'mn') {
    return saved;
  }
  return 'mn';
}

function splitWordsForElement(el: HTMLElement) {
  // If element was previously split, rebuild text first or split safely
  // Check if it has child spans with class 'w'
  const rawText = el.getAttribute('data-raw-text') || el.innerText;
  if (!el.getAttribute('data-raw-text')) {
    el.setAttribute('data-raw-text', rawText);
  }
}

export function applyLanguage(lang: Language) {
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  const dict = translations[lang];
  if (!dict) return;

  // 1. Elements with data-i18n (plain text)
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 2. Elements with data-i18n-html (HTML markup with <em>, <br>, etc.)
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key && dict[key] !== undefined) {
      const isSplit = el.classList.contains('split');
      
      if (isSplit && typeof (window as any).gsap !== 'undefined') {
        // Update HTML first
        el.innerHTML = dict[key];

        // Re-apply word splitter so GSAP animations work seamlessly
        const recurse = (node: Node): Node => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || '';
            if (!text.trim()) {
              return document.createTextNode(text);
            }
            const frag = document.createDocumentFragment();
            const parts = text.split(/(\s+)/);
            parts.forEach((part) => {
              if (/^\s+$/.test(part)) {
                frag.appendChild(document.createTextNode(part));
              } else if (part.length > 0) {
                const span = document.createElement('span');
                span.className = 'w';
                span.textContent = part;
                frag.appendChild(span);
              }
            });
            return frag;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const clone = node.cloneNode(false) as HTMLElement;
            Array.from(node.childNodes).forEach((child) => {
              clone.appendChild(recurse(child));
            });
            return clone;
          }
          return node.cloneNode(true);
        };

        const fragment = document.createDocumentFragment();
        Array.from(el.childNodes).forEach((child) => {
          fragment.appendChild(recurse(child));
        });
        el.innerHTML = '';
        el.appendChild(fragment);

        // Ensure visible if animation already ran
        el.querySelectorAll<HTMLElement>('.w').forEach((w) => {
          w.style.display = 'inline-block';
          w.style.opacity = '1';
          w.style.transform = 'none';
          w.style.filter = 'none';
        });
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // 3. Stats card suffixes (e.g. data-suf)
  const ageCard = document.querySelector<HTMLElement>('.card[data-to="10"]');
  if (ageCard) {
    const suf = lang === 'en' ? ' yrs' : ' нас';
    ageCard.setAttribute('data-suf', suf);
    const b = ageCard.querySelector('b');
    if (b) {
      b.textContent = '10' + suf;
    }
  }

  // 4. Update language switcher UI buttons
  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    const targetLang = btn.getAttribute('data-lang');
    if (targetLang === lang) {
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 5. Refresh ScrollTrigger if available
  if (typeof (window as any).ScrollTrigger !== 'undefined') {
    (window as any).ScrollTrigger.refresh();
  }

  // 6. Dispatch custom event for custom listeners
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

export function initLanguageSwitcher() {
  const currentLang = getCurrentLanguage();

  // Attach click listeners to language toggle buttons
  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang') as Language;
      if (targetLang && (targetLang === 'mn' || targetLang === 'en')) {
        applyLanguage(targetLang);
      }
    });
  });

  // Apply initial language
  applyLanguage(currentLang);
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initLanguageSwitcher());
  } else {
    initLanguageSwitcher();
  }
}
