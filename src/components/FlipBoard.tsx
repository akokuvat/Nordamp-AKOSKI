import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Placeholder industrial line-art. Swap for <img src="..."> to use real photos.
const ART: Record<string, string> = {
  grid: '<svg viewBox="0 0 120 90" fill="none" stroke="#8CA0B3" stroke-width="2.4" stroke-linecap="round"><path d="M60 8 L44 82 M60 8 L76 82 M48 34 L72 34 M44 56 L76 56 M40 82 L80 82"/><path d="M60 8 L38 20 M60 8 L82 20" stroke="#2C51E6"/><path d="M18 30 h20 M18 46 h20" stroke="#8CA0B3"/></svg>',
  nuclear: '<svg viewBox="0 0 120 90" fill="none" stroke="#8CA0B3" stroke-width="2.4" stroke-linecap="round"><path d="M32 82 h56 M34 82 V50 a26 26 0 0 1 52 0 V82"/><circle cx="60" cy="52" r="6" stroke="#2C51E6"/><path d="M60 52 l0 -13 M60 52 l11 6 M60 52 l-11 6" stroke="#2C51E6"/><path d="M96 82 V44 l8 -6 V82" /></svg>',
  steel: '<svg viewBox="0 0 120 90" fill="none" stroke="#8CA0B3" stroke-width="2.4" stroke-linecap="round"><path d="M28 40 h34 v20 a17 17 0 0 1 -34 0 Z"/><path d="M45 40 V26 h22 v14"/><path d="M62 52 q22 -2 26 18" stroke="#2C51E6"/><path d="M86 72 l4 10 l4 -10 Z" fill="#2C51E6" stroke="#2C51E6"/><path d="M24 82 h72" /></svg>',
  hydro: '<svg viewBox="0 0 120 90" fill="none" stroke="#8CA0B3" stroke-width="2.4" stroke-linecap="round"><path d="M20 30 h40 l16 52 H20 Z"/><path d="M20 40 h40 M20 52 h44 M20 64 h48" stroke="#5B7A99"/><circle cx="92" cy="60" r="13" stroke="#2C51E6"/><path d="M92 60 l0 -13 M92 60 l11 7 M92 60 l-11 7" stroke="#2C51E6"/></svg>',
};

export default function FlipBoard() {
  const { t } = useLanguage();
  const slides = t.hero.slides;
  const placeholder = t.hero.placeholder;

  const su = useRef<HTMLDivElement>(null);
  const sd = useRef<HTMLDivElement>(null);
  const fu = useRef<HTMLDivElement>(null);
  const fd = useRef<HTMLDivElement>(null);
  const fuf = useRef<HTMLDivElement>(null);
  const fdf = useRef<HTMLDivElement>(null);
  const sr = useRef<HTMLSpanElement>(null);
  const unit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideHTML = (i: number) => {
      const s = slides[i];
      return (
        `<div class="slide"><div class="art">${ART[s.key] ?? ''}</div>` +
        `<span class="ph">${placeholder}</span>` +
        `<div class="cap"><span class="tag">${s.tag}</span><span class="ttl">${s.title}</span></div></div>`
      );
    };
    const setAll = (i: number) => {
      const h = slideHTML(i);
      [su, sd, fuf, fdf].forEach((r) => {
        if (r.current) r.current.innerHTML = h;
      });
    };
    if (!fu.current || !fd.current) return;
    setAll(0);
    fu.current.style.transform = 'rotateX(0deg)';
    fd.current.style.transform = 'rotateX(90deg)';
    if (sr.current) sr.current.textContent = `${slides[0].tag} — ${slides[0].title}`;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const D = 380;
    let c = 0;
    const timers: number[] = [];

    const flip = () => {
      const n = (c + 1) % slides.length;
      if (reduce) {
        setAll(n);
        c = n;
        if (sr.current) sr.current.textContent = `${slides[n].tag} — ${slides[n].title}`;
        return;
      }
      if (su.current) su.current.innerHTML = slideHTML(n);
      if (sd.current) sd.current.innerHTML = slideHTML(c);
      if (fuf.current) fuf.current.innerHTML = slideHTML(c);
      if (fdf.current) fdf.current.innerHTML = slideHTML(n);
      const FU = fu.current!;
      const FD = fd.current!;
      FU.style.transition = 'none';
      FD.style.transition = 'none';
      FU.style.transform = 'rotateX(0deg)';
      FD.style.transform = 'rotateX(90deg)';
      void unit.current!.offsetWidth;
      FU.style.transition = `transform ${D}ms ease-in`;
      FU.style.transform = 'rotateX(-90deg)';
      timers.push(
        window.setTimeout(() => {
          FD.style.transition = `transform ${D}ms ease-out`;
          FD.style.transform = 'rotateX(0deg)';
        }, D)
      );
      timers.push(
        window.setTimeout(() => {
          setAll(n);
          FU.style.transition = 'none';
          FD.style.transition = 'none';
          FU.style.transform = 'rotateX(0deg)';
          FD.style.transform = 'rotateX(90deg)';
          c = n;
          if (sr.current) sr.current.textContent = `${slides[n].tag} — ${slides[n].title}`;
        }, D * 2 + 40)
      );
    };

    let interval = window.setInterval(flip, 3200);
    const board = unit.current?.closest('.flipboard') as HTMLElement | null;
    const stop = () => window.clearInterval(interval);
    const start = () => {
      stop();
      interval = window.setInterval(flip, 3200);
    };
    board?.addEventListener('mouseenter', stop);
    board?.addEventListener('mouseleave', start);

    return () => {
      stop();
      timers.forEach((id) => window.clearTimeout(id));
      board?.removeEventListener('mouseenter', stop);
      board?.removeEventListener('mouseleave', start);
    };
  }, [slides, placeholder]);

  return (
    <div className="flipboard" id="flipboard">
      <div className="fb-head">
        <span>{t.hero.boardHead}</span>
        <span className="live">{t.hero.live}</span>
      </div>
      <div className="flap-unit" aria-hidden="true" ref={unit}>
        <div className="flap up">
          <div className="face" ref={su} />
        </div>
        <div className="flap dn">
          <div className="face" ref={sd} />
        </div>
        <div className="flap foldup" ref={fu}>
          <div className="face" ref={fuf} />
        </div>
        <div className="flap folddn" ref={fd}>
          <div className="face" ref={fdf} />
        </div>
      </div>
      <span className="fb-sr" aria-live="polite" ref={sr} />
    </div>
  );
}
