import hero from "../assets/newhero.png";
import herologo from "../assets/herologo.png";

function NewHero() {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-y-6 bg-[{hero}] h-[50vh] md:h-[90vh] p-12 md:p-4 bg-fixed"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#2773a6] opacity-50 z-0"></div> */}
      <img src={herologo} className="w-100 z-10" />

      <h1 className="font-bold text-3xl md:text-8xl text-center text-neutral-50 z-10">
        Protect Your Family
      </h1>
      <p className="md:text-6xl font-bold text-neutral-50 z-10">
        Life Insurance
      </p>
      <p className="text-base md:text-3xl text-center text-neutral-50 z-10">
        Whole Life - Indexed Universal Life (IUL) - Term Life Final Expense
      </p>
    </div>
  );
}

export default NewHero;
