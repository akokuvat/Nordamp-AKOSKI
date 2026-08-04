import { useLanguage } from '../context/LanguageContext';

export default function ContextBand() {
  const { t } = useLanguage();
  return (
    <section className="band">
      <div className="band-in">
        <p className="cap">{t.band.caption}</p>
        <div className="stats">
          {t.band.stats.map((s, i) => (
            <div className="stat rev" key={i}>
              <div className="num">
                {s.num}
                <small> {s.unit}</small>
              </div>
              <div className="desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
