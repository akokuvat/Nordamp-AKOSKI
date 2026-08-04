import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import OneLineDiagram from './OneLineDiagram';

export default function Approach() {
  const { t } = useLanguage();
  const a = t.approach;

  useEffect(() => {
    const fl = document.querySelector<HTMLElement>('.flow-line b');
    if (!fl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0;
    let dir = 1;
    const id = window.setInterval(() => {
      x += dir * 0.6;
      if (x > 100 || x < 0) dir *= -1;
      fl.style.left = x + '%';
    }, 28);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="sec flow" id="approach">
      <div className="wrap">
        <div className="flow-head rev">
          <div className="sec-head">
            <p className="eyebrow">{a.eyebrow}</p>
            <h2>{a.title}</h2>
            <p>{a.intro}</p>
          </div>
          <div className="oneline" aria-hidden="true">
            <OneLineDiagram />
            <div className="cta-note">{a.diagramNote}</div>
          </div>
        </div>
        <div className="flow-track rev">
          <div className="flow-line" aria-hidden="true">
            <b />
          </div>
          {a.steps.map((st) => (
            <div className="step" key={st.n}>
              <div className="dot">{st.n}</div>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
