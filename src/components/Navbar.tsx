import icon from "../assets/icon.png";

function Navbar() {
  return (
    <div className="w-full bg-neutral-950">
      <div className="flex justify-between items-center mx-auto w-[90%] h-25">
        <div className="flex gap-x-7 items-center">
          <img src={icon} alt="Logo" className="h-16" />
          <p className="hidden md:flex text-xl font-bold text-neutral-50">
            Ironclad Solutions LLC
          </p>
        </div>
        <nav>
          <ul className=" text-lg flex gap-x-6 items-center text-neutral-50">
            <li className="hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#">Apply Now</a>
            </li>
            <li className="hover:underline">
              <a href="#">Schedule a Meeting</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
