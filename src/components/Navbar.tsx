import { useState } from "react";
import icon from "../assets/icon.png";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-neutral-950">
      <div className="relative flex items-center mx-auto w-full md:w-[90%] py-4 md:py-0 h-20 md:h-24">
        <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 ml-4 z-20">
          <button
            onClick={toggleMenu}
            className="rounded-full p-1 bg-neutral-50 w-10 h-10 flex items-center justify-center focus:outline-none transition-all duration-300 ease-in-out hover:bg-neutral-200"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isMenuOpen ? (
              <X color="#000000" className="w-6 h-6" />
            ) : (
              <Menu color="#000000" className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="flex flex-1 justify-center md:justify-between items-center mx-auto w-[90%] ">
          <div className="flex gap-x-6 items-center">
            <NavLink to="/">
              <img src={icon} alt="Logo" className="h-15" />
            </NavLink>
            <p className="hidden md:flex text-xl font-bold text-neutral-50">
              <NavLink to="/">IronClad Solutions LLC</NavLink>
            </p>
          </div>
          <nav className="hidden md:block">
            <ul className=" text-lg flex gap-x-6 items-center text-neutral-50">
              <li className="hover:underline hover:underline-offset-8 font-light">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:underline hover:underline-offset-8 font-light">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 w-full bg-neutral-950 shadow-lg z-20 py-4">
            <ul className="text-lg flex flex-col items-center text-neutral-50">
              <li className="hover:bg-neutral-900 w-full text-start font-light p-4">
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-neutral-900 w-full text-start font-light p-4">
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
