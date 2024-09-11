import About from "./components/sections/about/About";
import Final from "./components/sections/final/Final";
import Footer from "./components/sections/footer/Footer";
import Hero from "./components/sections/hero/Hero";
import IconBrand from "./components/sections/icon-brands/IconBrand";
import Location from "./components/sections/location/Location";
import Place from "./components/sections/place/Place";
import Teams from "./components/sections/teams/Teams";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Hero />
      <IconBrand />
      <Place />
      <About />
      <Location />
      <Teams />
      <Final />
      <Footer />
    </div>
  );
}
