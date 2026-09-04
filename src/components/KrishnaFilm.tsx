import { useCallback, useEffect, useRef, useState } from "react";
import { Embers } from "./Ornaments";
import { useScrollScene, stops } from "../hooks/useScrollScene";

/**
 * The scroll-triggered film. Once the hero clears the viewport this pins and
 * the video blooms open inside a temple-arch mask.
 */
export default function KrishnaFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | undefined>(undefined);

  const apply = useCallback((p: number, el: HTMLElement) => {
    el.style.setProperty("--stage-scale", `${stops(p, [0, 0.3, 0.76, 1], [0.74, 1, 1, 0.92])}`);
    el.style.setProperty("--stage-o", `${stops(p, [0, 0.06, 0.84, 0.98], [0, 1, 1, 0])}`);
    el.style.setProperty("--stage-rot", `${stops(p, [0, 0.3], [-4, 0])}deg`);
    el.style.setProperty("--side-l", `${stops(p, [0.22, 0.44], [-34, 0])}px`);
    el.style.setProperty("--side-r", `${stops(p, [0.26, 0.48], [34, 0])}px`);
    el.style.setProperty("--side-o", `${stops(p, [0.2, 0.4, 0.8, 0.92], [0, 1, 1, 0])}`);
  }, []);

  useScrollScene(sectionRef, apply, "pin");

  /* Fetch the clip only once the film is close, then play it only on screen. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSrc("/media/krishna.mp4");
        loader.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    loader.observe(video);

    const player = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    player.observe(video);

    return () => {
      loader.disconnect();
      player.disconnect();
    };
  }, []);

  return (
    <section className="film" id="film" ref={sectionRef}>
      <div className="film__sticky">
        <Embers count={12} />

        <div className="film__aura" />

        <aside className="film__side film__side--l">
          <h4>Makhan Chor</h4>
          <p>The butter thief who steals hearts just as easily — mischief, and pure joy.</p>
        </aside>

        <div className="film__stage">
          <svg className="film__kalasha" viewBox="0 0 60 90" aria-hidden="true">
            <path d="M30 4c3 8 7 12 7 18a7 7 0 0 1-14 0c0-6 4-10 7-18Z" fill="rgb(224 169 74)" />
            <rect x="27" y="32" width="6" height="14" rx="3" fill="rgb(224 169 74)" />
            <path d="M14 46h32l-6 10H20l-6-10Z" fill="rgb(224 169 74)" />
            <path d="M18 58c-2 12 5 20 12 20s14-8 12-20H18Z" fill="rgb(224 169 74)" />
          </svg>

          <div className="film__arch">
            <video
              ref={videoRef}
              className="film__video"
              src={src}
              muted
              loop
              playsInline
              autoPlay
              preload="none"
              aria-label="Animation of baby Krishna"
            />
          </div>

          <div className="film__caption">
            <h3>Bal Gopal</h3>
            <p>The little one of Vrindavan</p>
          </div>
        </div>

        <aside className="film__side film__side--r">
          <h4>Nanda Lala</h4>
          <p>On Janmashtami we celebrate that joy — devotion, sweetness and a little play.</p>
        </aside>
      </div>

      <div className="film__spacer" />
    </section>
  );
}
