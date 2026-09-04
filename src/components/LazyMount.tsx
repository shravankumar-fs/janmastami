import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  /** Reserved height so the scrollbar doesn't jump when the section arrives. */
  minHeight: string;
  /** How far ahead of the viewport to start loading. */
  rootMargin?: string;
};

/**
 * Defers both the code and the render of a section until the reader is close
 * to it. The placeholder holds the section's approximate height so document
 * height stays stable while scrolling.
 */
export default function LazyMount({ children, minHeight, rootMargin = "900px 0px" }: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setReady(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        io.disconnect();
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className="lazy-slot" style={ready ? undefined : { minHeight }}>
      {ready ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}
