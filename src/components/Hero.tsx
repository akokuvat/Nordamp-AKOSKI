import { useLanguage } from '../context/LanguageContext';
import FlipBoard from './FlipBoard';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  return (
    <section className="hero">
      <div className="hero-in">
        <div>
          <p className="eyebrow">{h.eyebrow}</p>
          <h1>
            {h.titlePre}
            <span className="amp">{h.titleHighlight}</span>
            {h.titlePost}
          </h1>
          <p className="lead">{h.lead}</p>
          <div className="hero-cta">
            <a className="btn btn-amp" href="#contact">{h.ctaPrimary}</a>
            <a className="btn btn-ghost" href="#services">{h.ctaSecondary}</a>
          </div>
          <div className="hero-meta">
            <span>{h.metaFI}</span>
            <span>{h.metaSE}</span>
          </div>
        </div>
        <div className="hero-visual">
          <FlipBoard />
        </div>
      </div>
    </section>
  );
}
