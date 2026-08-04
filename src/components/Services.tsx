import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;
  return (
    <section className="sec services" id="services">
      <div className="wrap">
        <div className="sec-head rev">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2>{s.title}</h2>
          <p>{s.intro}</p>
        </div>
        <div className="svc-grid rev">
          {s.items.map((it) => (
            <article className="svc" key={it.idx}>
              <div className="idx">{it.idx}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
