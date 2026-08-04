import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  return (
    <section className="cta" id="contact">
      <div className="cta-in">
        <div className="rev">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <div className="cta-actions rev">
          <a className="btn btn-amp" href={`mailto:${c.email}`}>{c.button}</a>
          <span className="big">{c.email}</span>
          <span className="big">{c.phone}</span>
        </div>
      </div>
    </section>
  );
}
