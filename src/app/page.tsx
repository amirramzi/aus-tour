import About from "./components/sections/about/About";
import Hero from "./components/sections/hero/Hero";
import Location from "./components/sections/location/Location";
import Place from "./components/sections/place/Place";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Hero />
      <Place />
      <About />
      <Location />
    </>
  );
}
