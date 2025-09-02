import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full absolute top-0 left-0 z-50 ">
      <div className="relative flex items-center mx-auto w-full md:w-[90%] py-4 md:py-0 h-24 md:h-28 ">
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

        <div className="flex flex-1 justify-center md:justify-end items-center mx-auto w-[90%] ">
          <nav className="hidden md:block">
            <ul className="text-lg flex gap-x-6 items-center text-neutral-50">
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
          <nav className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[80%] bg-neutral-900 shadow-lg z-20">
            <ul className="text-lg flex flex-col text-neutral-50">
              <NavLink to="/" onClick={toggleMenu}>
                <li className="hover:bg-neutral-800 w-full text-start font-light p-4">
                  Home
                </li>
              </NavLink>
              <NavLink to="/contact" onClick={toggleMenu}>
                <li className="hover:bg-neutral-800 w-full text-start font-light p-4">
                  Contact Us
                </li>
              </NavLink>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
