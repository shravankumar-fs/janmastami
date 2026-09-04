import { useCallback, useRef } from "react";
import { Diya, Embers } from "./Ornaments";
import { useScrollScene, stops } from "../hooks/useScrollScene";
import { SITE } from "../data/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const apply = useCallback((p: number, el: HTMLElement) => {
    el.style.setProperty("--banner-y", `${stops(p, [0, 1], [0, 12])}%`);
    el.style.setProperty("--banner-scale", `${stops(p, [0, 1], [1.06, 1.16])}`);
    el.style.setProperty("--copy-y", `${stops(p, [0, 1], [0, -28])}%`);
    el.style.setProperty("--copy-o", `${stops(p, [0, 0.7], [1, 0])}`);
  }, []);

  useScrollScene(ref, apply, "through");

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__sky" />

      <div className="hero__media">
        <img
          className="hero__banner"
          src="/banner.png"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__scrim" />
      </div>

      <Embers count={16} />
      <Diya className="hero__diya" />

      <div className="shell">
        <div className="hero__grid">
          <div className="hero__copy-col">
            <span className="script hero__happy hero__enter" style={{ "--d": "0ms" } as React.CSSProperties}>
              Happy
            </span>

            <h1 className="display hero__title hero__enter" style={{ "--d": "110ms" } as React.CSSProperties}>
              Krishna
              <em>Janmashtami</em>
              Wishes
            </h1>

            <p className="lede hero__copy hero__enter" style={{ "--d": "220ms" } as React.CSSProperties}>
              May the divine blessings of Lord Krishna fill your life with joy, love and harmony.
            </p>

            <div className="hero__from hero__enter" style={{ "--d": "320ms" } as React.CSSProperties}>
              From all of us at
              <strong>{SITE.brand}</strong>
            </div>

            <div className="hero__actions hero__enter" style={{ "--d": "420ms" } as React.CSSProperties}>
              <a className="btn" href="#wishes">
                Send Wishes
              </a>
              <a className="btn btn--ghost" href="#about">
                About the studio
              </a>
            </div>
          </div>

          <div aria-hidden="true" />
        </div>
      </div>

      <div className="scroll-cue">
        <span>
          Scroll to meet
          <br />
          little Krishna
        </span>
        <span className="scroll-cue__mouse" />
      </div>
    </section>
  );
}
