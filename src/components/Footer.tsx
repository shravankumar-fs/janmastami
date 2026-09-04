import Reveal from "./Reveal";
import { Logo, SocialIcon } from "./Ornaments";
import { FOOTER_COLS, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <Reveal className="footer__brand">
            <a className="brand" href="#top">
              <Logo className="brand__mark" />
              <span className="brand__name">{SITE.brand}</span>
            </a>
            <p className="lede">
              Building intelligent digital solutions that empower businesses and create meaningful
              impact.
            </p>
            <div className="socials">
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <SocialIcon name="linkedin" />
              </a>
              <a href={SITE.url} target="_blank" rel="noreferrer" aria-label="Instagram">
                <SocialIcon name="instagram" />
              </a>
              <a href={SITE.url} target="_blank" rel="noreferrer" aria-label="X">
                <SocialIcon name="x" />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email">
                <SocialIcon name="mail" />
              </a>
            </div>
          </Reveal>

          {FOOTER_COLS.map((col, i) => (
            <Reveal className="footer__col" key={col.title} delay={80 + i * 70}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="footer__cta" delay={220}>
            <p>
              Let's build something
              <br />
              extraordinary together.
            </p>
            <a className="btn" href={`mailto:${SITE.email}`}>
              Get in Touch →
            </a>
          </Reveal>
        </div>

        <div className="footer__bar">
          <span>
            © {SITE.year} {SITE.brand}. All rights reserved. · {SITE.location}
          </span>
          <nav>
            <a href={SITE.url} target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            <a href={SITE.url} target="_blank" rel="noreferrer">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
