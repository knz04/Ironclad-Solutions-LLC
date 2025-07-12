import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route
          path="*"
          element={
            <div className="p-8 text-center text-red-500">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              <p className="text-lg">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
