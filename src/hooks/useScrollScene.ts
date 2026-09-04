import { useEffect, type RefObject } from "react";

type Apply = (progress: number, el: HTMLElement) => void;

/**
 * Interpolate `p` across a set of stops, e.g.
 *   stops(p, [0, 0.3, 1], [0.7, 1, 0.9])
 */
export function stops(p: number, inputs: number[], outputs: number[]) {
  const last = inputs.length - 1;
  if (p <= inputs[0]) return outputs[0];
  if (p >= inputs[last]) return outputs[last];
  for (let i = 0; i < last; i += 1) {
    if (p <= inputs[i + 1]) {
      const span = inputs[i + 1] - inputs[i] || 1;
      const t = (p - inputs[i]) / span;
      return outputs[i] + (outputs[i + 1] - outputs[i]) * t;
    }
  }
  return outputs[last];
}

/**
 * Drives `apply` with 0→1 progress as the element travels the viewport.
 *
 *   "through" — 1 when the element's bottom reaches the top of the screen
 *   "pin"     — 1 when the element's bottom reaches the bottom of the screen
 *               (the range a `position: sticky` child stays pinned for)
 *
 * Reads are batched into one rAF per scroll burst; `apply` only writes.
 */
export function useScrollScene(
  ref: RefObject<HTMLElement | null>,
  apply: Apply,
  mode: "through" | "pin" = "pin",
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let queued = false;

    const measure = () => {
      queued = false;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const span =
        mode === "pin"
          ? Math.max(1, rect.height - window.innerHeight)
          : Math.max(1, rect.height);
      const p = (window.scrollY - top) / span;
      apply(Math.min(1, Math.max(0, p)), el);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, apply, mode]);
}
