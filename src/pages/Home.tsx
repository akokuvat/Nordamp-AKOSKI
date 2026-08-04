import { useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ContextBand from '../components/ContextBand';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Markets from '../components/Markets';
import BackedBy from '../components/BackedBy';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rev'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    const safety = window.setTimeout(() => els.forEach((el) => el.classList.add('in')), 1800);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <span id="top" />
        <Hero />
        <ContextBand />
        <Services />
        <Approach />
        <Markets />
        <BackedBy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
