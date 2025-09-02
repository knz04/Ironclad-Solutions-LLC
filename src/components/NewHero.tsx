import hero from "../assets/newhero.png";
import herologo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function NewHero() {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-y-6 bg-[{hero}] h-screen p-12 md:p-4 bg-fixed"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <img src={herologo} className="w-24 sm:w-40 md:w-50 lg:w-50 z-10" />

      <h1 className="font-bold text-3xl md:text-7xl/21 text-center text-neutral-50 z-10">
        Protecting Families
        <br />
        Securing Legacies
        <br />
        Building Wealth
      </h1>

      <Link
        to="#how"
        className="text-center text-base font-semibold text-neutral-50 hover:text-sky-700 bg-sky-700 hover:bg-neutral-50 hover:cursor-pointer mt-4 py-4 px-9 z-10 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-115"
      >
        Learn More
      </Link>
    </div>
  );
}

export default NewHero;
