import { useEffect, useState } from "react";
import { Logo } from "./Ornaments";
import { NAV_LINKS, SITE } from "../data/site";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`nav ${solid ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="shell">
        <div className="nav__inner">
          <a className="brand" href="#top" aria-label={`${SITE.brand} home`}>
            <Logo className="brand__mark" />
            <span className="brand__name">{SITE.brand}</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <a className="btn nav__cta" href="#wishes">
            Celebrate Janmashtami
          </a>

          <button
            className="nav__burger"
            data-open={open}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i /><i /><i />
          </button>
        </div>

        <div className="nav__sheet" data-open={open} aria-hidden={!open}>
          <div className="nav__sheet-clip">
            <div className="nav__sheet-inner">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a className="btn" href="#wishes" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                Celebrate Janmashtami
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
