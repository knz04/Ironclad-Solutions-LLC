import { team } from "../constants";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <div className="h-fit xl:h-[50vh] 2xl:h-[65vh] bg-linear-to-b from-[#555759] to-neutral-900 ">
      <div className="flex flex-col justify-center items-center py-10 ">
        <p className="text-2xl md:text-4xl font-semibold text-neutral-50 pb-2 z-10">
          Who We Are
        </p>
        <p className="text-base md:text-xl font-light text-neutral-50 z-10">
          Meet the dedicated professionals behind our success.
        </p>
      </div>
      <div className="grid gap-y-12 md:gap-y-20 lg:gap-y-0 md:grid-cols-2 lg:grid-cols-4 py-8">
        {team.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center z-10"
          >
            <Link to={`/contact#${item.id}`}>
              <div
                className={`w-56 h-56 md:w-60 md:h-60 rounded-full mb-4 bg-cover bg-center bg-no-repeat shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-115`}
                style={{
                  backgroundImage: `url('${item.profile}')`,
                  backgroundPosition: "center 0",
                }}
              />
            </Link>
            <Link
              to={`/contact#${item.id}`}
              className="hover:text-sky-700 hover:underline transition text-base font-semibold md:text-xl text-neutral-50 pt-2"
            >
              {item.name}
            </Link>
            <p className="text-neutral-50 font-light text-base md:text-lg ">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeAre;
