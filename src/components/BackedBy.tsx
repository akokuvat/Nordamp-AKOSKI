import { useLanguage } from '../context/LanguageContext';

export default function BackedBy() {
  const { t } = useLanguage();
  const b = t.backed;
  return (
    <section className="sec backed" id="backed">
      <div className="wrap backed-in">
        <div className="rev">
          <p className="eyebrow">{b.eyebrow}</p>
          <h2>{b.title}</h2>
          <p>{b.body}</p>
        </div>
        <div className="entities rev">
          {b.entities.map((e) => (
            <div className={`ent ${e.accent ? 'se' : ''}`} key={e.name}>
              <div className="n">{e.name}</div>
              <div className="r">{e.reg}</div>
              <div className="d">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
