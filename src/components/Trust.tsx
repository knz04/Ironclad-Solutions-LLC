import { Link } from "react-router-dom";
import its_logo from "../assets/its_logo.png";

export default function Trust() {
  return (
    <div className="w-full h-fit xl:h-[50vh] 2xl:h-[65vh] flex flex-col md:flex-row justify-center gap-x-10 gap-y-4 md:gap-y-0 items-center  bg-[#555759]">
      <Link
        to="https://www.integratedtrustsystems.com/LANDING/"
        target="_blank"
      >
        <img
          src={its_logo}
          alt="ITS Logo"
          className="w-fit h-fit bg-neutral-50 p-4"
        />
      </Link>

      <div className="flex flex-col items-start justify-center w-[90%] md:w-[40%]">
        <p className="text-2xl md:text-4xl font-semibold text-neutral-50 pb-2">
          Our Trusted Estate Planning Partner
        </p>

        <p className="text-md md:text-lg text-neutral-50">
          Ironclad Solutions is proud to partner with Integrated Trust Systems
          (ITS), a nationally recognized leader in estate planning with 40 years
          of experience serving clients nationwide.
          <br />
          <br />
          Since their founding, ITS has maintained an A+ business rating with
          the Better Business Bureau, reflecting a long-standing commitment to
          integrity, professionalism, and client satisfaction. Their structured,
          compliant, and time-tested estate planning framework allows us to
          deliver solutions backed by experience and reliability.
          <br />
          <br />
          We work only with partners who meet our standards, and ITS exemplifies
          the level of trust and excellence we expect for our clients.
        </p>
        <Link
          to="https://www.bbb.org/us/az/scottsdale/profile/estate-planning-and-management/integrated-trust-systems-1126-7004806"
          target="_blank"
        >
          <button className="hover:cursor-pointer bg-sky-700 hover:bg-neutral-50 text-neutral-50 hover:text-sky-700 font-bold py-3 px-6 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-4">
            A+ Business Rating with the Better Business Bureau
          </button>
        </Link>
      </div>
    </div>
  );
}
