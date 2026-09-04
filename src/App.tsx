import { lazy } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TorchLight from "./components/TorchLight";
import LazyMount from "./components/LazyMount";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

/* Everything below the fold ships as its own chunk and loads on approach. */
const KrishnaFilm = lazy(() => import("./components/KrishnaFilm"));
const AboutAghora = lazy(() => import("./components/AboutAghora"));
const Blessing = lazy(() => import("./components/Blessing"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Nav />
      <TorchLight />

      <main>
        <Hero />

        <LazyMount minHeight="250svh">
          <KrishnaFilm />
        </LazyMount>

        <LazyMount minHeight="100svh">
          <AboutAghora />
        </LazyMount>

        <LazyMount minHeight="90svh">
          <Blessing />
        </LazyMount>
      </main>

      <LazyMount minHeight="480px" rootMargin="600px 0px">
        <Footer />
      </LazyMount>
    </>
  );
}
