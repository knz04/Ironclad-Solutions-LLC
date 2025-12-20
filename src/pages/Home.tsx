// import Hero from "../components/Hero";
import FiveFs from "../components/FiveFs";
import WhoWeAre from "../components/WhoWeAre";
import Contact from "../components/Contact";
import NewHero from "../components/NewHero";
import Services from "../components/Services";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Trust from "../components/Trust";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <NewHero />
      <FiveFs />
      <Services />
      <Trust />
      <WhoWeAre />
      <Contact />
    </>
  );
}

export default Home;
