import { useEffect } from "react";

/**
 * A cursor-following torch. Two fixed blend layers brighten whatever is painted
 * beneath them, so the effect carries across every section of the site.
 */
export default function TorchLight() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.45;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const show = () => root.style.setProperty("--torch-on", "1");
    const hide = () => root.style.setProperty("--torch-on", "0");

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      show();
    };

    const tick = () => {
      const k = reduced ? 1 : 0.16;
      x += (targetX - x) * k;
      y += (targetY - y) * k;
      root.style.setProperty("--mx", `${x.toFixed(1)}px`);
      root.style.setProperty("--my", `${y.toFixed(1)}px`);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      hide();
    };
  }, []);

  return (
    <div className="torch" aria-hidden="true">
      <div className="torch__soft" />
      <div className="torch__glow" />
    </div>
  );
}
