import About from "./components/sections/about/About";
import Final from "./components/sections/final/Final";
import Footer from "./components/sections/footer/Footer";
import Hero from "./components/sections/hero/Hero";
import Location from "./components/sections/location/Location";
import Place from "./components/sections/place/Place";
import Teams from "./components/sections/teams/Teams";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Hero />
      <Place />
      <About />
      <Location />
      <Teams />
      <Final />
      <Footer />
    </>
  );
}
