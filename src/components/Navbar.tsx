import React, { useState } from "react";
import icon from "../assets/icon.png";
import { Menu, X } from "lucide-react";

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
            <img src={icon} alt="Logo" className="h-15" />
            <p className="hidden md:flex text-xl font-bold text-neutral-50">
              Ironclad Solutions LLC
            </p>
          </div>
          <nav className="hidden md:block">
            <ul className=" text-lg flex gap-x-6 items-center text-neutral-50">
              <li className="hover:underline font-light">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline font-light">
                <a href="#">Apply Now</a>
              </li>
              <li className="hover:underline font-light">
                <a href="#">Schedule a Meeting</a>
              </li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 w-full bg-neutral-950 shadow-lg z-20 py-4">
            <ul className="text-lg flex flex-col items-center text-neutral-50">
              <li className="hover:bg-neutral-900 w-full text-start font-light p-4">
                <a href="#" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li className="hover:bg-neutral-900 w-full text-start font-light p-4">
                <a href="#" onClick={toggleMenu}>
                  Apply Now
                </a>
              </li>
              <li className="hover:bg-neutral-900 w-full text-start font-light p-4">
                <a href="#" onClick={toggleMenu}>
                  Schedule a Meeting
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
