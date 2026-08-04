import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { type PageData, slugTitles } from '../config/pagesContent';
import { useLanguage } from '../context/LanguageContext';

export default function Page({ data }: { data: PageData }) {
  const { t } = useLanguage();
  return (
    <>
      <Nav />
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <div className="crumb">
              <Link to="/">Nordamp Energy</Link> · {data.group}
            </div>
            <p className="group">{data.group}</p>
            <h1>{data.title}</h1>
            <p className="lead">{data.lead}</p>
          </div>
        </section>

        <section className="page-body">
          <div className="wrap">
            {data.sections.map((s, i) => (
              <div className="psec" key={i}>
                <h2>{s.heading}</h2>
                {s.paras?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.list && (
                  <ul className="plist">
                    {s.list.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                )}
                {s.box && (
                  <div className="pbox" style={{ margin: '18px 0 0' }}>
                    {s.box.k && <span className="k">{s.box.k}</span>}
                    <p>{s.box.text}</p>
                  </div>
                )}
              </div>
            ))}

            {data.note && (
              <div className="pbox">
                <span className="k">Note</span>
                <p>{data.note}</p>
              </div>
            )}

            {data.related && data.related.length > 0 && (
              <div className="related">
                <div className="k">Related</div>
                {data.related.map((slug) => (
                  <Link key={slug} to={`/${slug}`}>
                    {slugTitles[slug] ?? slug}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <div>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.body}</p>
            </div>
            <a className="btn btn-amp" href={`mailto:${t.contact.email}`}>
              {t.contact.button}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
