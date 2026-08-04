import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="foot-in">
        <div className="foot-brand">
          <img className="brand-logo" src="/nordamp-logo-dark.png" alt="Nordamp Energy" style={{ height: 22, marginBottom: 14 }} />
          <p>{f.tagline}</p>
        </div>
        <div className="foot-col">
          <h4>{f.companyHeading}</h4>
          {f.links.map((l) => (
            <a href={l.href} key={l.label}>{l.label}</a>
          ))}
        </div>
        <div className="foot-col">
          <h4>{f.entitiesHeading}</h4>
          {f.entities.map((e) => (
            <p key={e}>{e}</p>
          ))}
          <a href={`mailto:${f.email}`}>{f.email}</a>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-bottom-in">
          <span>{f.copyright}</span>
          <span>{f.region}</span>
        </div>
      </div>
    </footer>
  );
}
