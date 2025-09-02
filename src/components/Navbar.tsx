import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 ">
      <div className="relative flex items-center mx-auto w-full md:w-[90%] py-4 md:py-0 h-24 md:h-28 ">
        <div className="flex flex-1 justify-center md:justify-end items-center mx-auto w-[90%] ">
          <nav className="block">
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
      </div>
    </div>
  );
}

export default Navbar;
