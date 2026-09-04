import Reveal from "./Reveal";
import { Icon } from "./Ornaments";
import { PILLARS, SERVICES, SITE, STATS } from "../data/site";

export default function AboutAghora() {
  return (
    <section className="about" id="about">
      <div className="shell">
        <div className="about__head">
          <div>
            <Reveal as="div">
              <span className="eyebrow">Who is wishing you</span>
            </Reveal>
            <Reveal as="div" delay={80}>
              <h2 className="display about__title">
                A software studio that <span className="gold-text">designs, engineers</span> and
                ships.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="lede">
              {SITE.brand} builds websites, apps, SaaS products and backend systems for businesses
              and startups — from an early prototype to a maintained product. We design the
              interface, build the software behind it, and keep it running.
            </p>
            <div className="about__meta" style={{ marginTop: "1.6rem" }}>
              {STATS.map((s) => (
                <div className="about__stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal as="article" className="pillar" key={p.title} delay={i * 90}>
              <div className="pillar__icon">
                <Icon name={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="services">
          <Reveal>
            <h4>What we do</h4>
          </Reveal>
          <Reveal delay={90}>
            <div className="services__list">
              {SERVICES.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
              <a className="chip" href={SITE.url} target="_blank" rel="noreferrer">
                View all 29 services →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
