import { useState } from "react";
import Reveal from "./Reveal";
import { Diya, Embers, Flute } from "./Ornaments";
import { SITE, WISH_TEXT } from "../data/site";

export default function Blessing() {
  const [toast, setToast] = useState("");

  const share = async () => {
    const payload = { title: "Happy Krishna Janmashtami", text: WISH_TEXT, url: SITE.url };
    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
      await navigator.clipboard.writeText(`${WISH_TEXT}\n${SITE.url}`);
      setToast("Wish copied — now go make someone smile.");
    } catch {
      setToast("Could not share here. Copy the wish above and pass it on.");
    }
    setTimeout(() => setToast(""), 4000);
  };

  return (
    <section className="blessing" id="wishes">
      <Embers count={14} />

      <div className="shell">
        <Reveal className="blessing__card">
          <Flute className="blessing__flute" />

          <div className="ornament">
            <span />
            <Diya style={{ width: 44 }} />
            <span />
          </div>

          <span className="eyebrow blessing__eyebrow">Wishing you and your family</span>

          <h2 className="display blessing__title">
            <span className="gold-text">a Blessed Janmashtami!</span>
          </h2>

          <p className="blessing__text">
            May Lord Krishna's blessings bring you peace, prosperity and endless joy — this year and
            every year after.
          </p>

          <div className="blessing__from">
            From all of us at
            <strong>{SITE.brand}</strong>
          </div>

          <div className="blessing__actions">
            <button className="btn" onClick={share}>
              Send this wish
            </button>
            <a
              className="btn btn--ghost"
              href={`mailto:${SITE.email}?subject=Let%27s%20build%20something`}
            >
              Start a project
            </a>
          </div>

          <p className="blessing__toast" role="status" aria-live="polite">
            {toast}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
