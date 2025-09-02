import hero from "../assets/newhero.png";
import herologo from "../assets/logo.jpeg";

function NewHero() {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-y-6 bg-[{hero}] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] p-12 md:p-4 bg-fixed"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <img src={herologo} className="w-24 sm:w-40 md:w-50 lg:w-50 z-10" />

      <h1 className="font-bold text-3xl md:text-8xl text-center text-neutral-50 z-10">
        Protecting Families
        <br />
        Securing Legacies
        <br />
        Building Wealth
      </h1>
    </div>
  );
}

export default NewHero;
