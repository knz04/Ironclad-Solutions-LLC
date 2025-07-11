import "./App.css";
import FiveFs from "./components/FiveFs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FiveFs />
      <WhoWeAre />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
