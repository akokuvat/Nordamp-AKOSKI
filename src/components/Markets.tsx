import { useLanguage } from '../context/LanguageContext';

export default function Markets() {
  const { t } = useLanguage();
  const m = t.markets;
  return (
    <section className="sec markets" id="markets">
      <div className="wrap">
        <div className="sec-head rev">
          <p className="eyebrow">{m.eyebrow}</p>
          <h2>{m.title}</h2>
          <p>{m.intro}</p>
        </div>
        <div className="mkt-grid rev">
          {m.items.map((it) => (
            <article className={`mkt ${it.accent ? 'se' : ''}`} key={it.country}>
              <div className="flagrow">
                <h3>{it.country}</h3>
                <span className="entity">{it.entity}</span>
              </div>
              <p className="focus">{it.focus}</p>
              <ul>
                {it.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <span className="tag">{it.regime}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
