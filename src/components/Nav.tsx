import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

type MenuKey = 'who' | 'what' | null;

function NavItem({ href, className, onClick, children }: { href: string; className?: string; onClick?: () => void; children: ReactNode }) {
  const isRoute = href.startsWith('/') && !href.startsWith('/#');
  if (isRoute) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export default function Nav() {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest('.nav')) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const closeAll = () => {
    setOpen(null);
    setMenuOpen(false);
  };

  const renderDropdown = (
    key: Exclude<MenuKey, null>,
    label: string,
    items: readonly { label: string; href: string; soon?: boolean }[],
    wide = false
  ) => (
    <div className={`navitem ${open === key ? 'open' : ''}`}>
      <button className="navlink" aria-haspopup="true" aria-expanded={open === key} onClick={() => setOpen(open === key ? null : key)}>
        {label}
        <span className="caret" aria-hidden="true" />
      </button>
      <div className={`dropdown ${wide ? 'wide' : ''}`}>
        {items.map((it) => (
          <NavItem key={it.label} href={it.href} onClick={closeAll}>
            {it.label}
          </NavItem>
        ))}
      </div>
    </div>
  );

  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" to="/" aria-label="Nordamp Energy home" onClick={closeAll}>
          <img className="brand-logo" src="/nordamp-logo-dark.png" alt="Nordamp Energy" />
          <span className="rule" aria-hidden="true" />
          <span className="sub">{t.nav.tagline}</span>
        </Link>

        <button className="navtoggle" aria-expanded={menuOpen} aria-controls="menu" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
          Menu
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="menu">
          {renderDropdown('who', t.nav.whoWeAre, t.nav.who)}
          {renderDropdown('what', t.nav.whatWeDo, t.nav.what, true)}
          <a className="navlink" href="/#contact" onClick={closeAll}>
            {t.nav.contact}
          </a>
          <button className="langtoggle" onClick={() => setLang(lang === 'en' ? 'sv' : 'en')} aria-label="Toggle language">
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
            <span className="sep">/</span>
            <span className={lang === 'sv' ? 'on' : ''}>SV</span>
          </button>
          <a className="btn btn-amp" href="/#contact" onClick={closeAll}>
            {t.nav.getInTouch}
          </a>
        </nav>
      </div>
    </header>
  );
}
