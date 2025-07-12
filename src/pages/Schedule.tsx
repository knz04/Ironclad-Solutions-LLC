import { Link, useLocation } from "react-router-dom";
import schedule from "../assets/schedule.jpeg";
import { team } from "../constants";
import { useEffect } from "react";
import Form from "../components/Form";

function Schedule() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="relative min-h-[90vh] bg-neutral-900 overflow-hidden font-inter">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed grayscale"
        style={{
          backgroundImage: `url('${schedule}')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>{" "}
      <div className="relative z-10 flex flex-col justify-center items-center py-10 px-4 h-full">
        <p className="text-4xl sm:text-5xl md:text-6xl text-neutral-50 py-4 font-bold text-center leading-tight">
          Contact Us
        </p>
        <p className="text-base md:text-xl font-light text-neutral-50">
          Schedule a meeting with out dedicated professionals.
        </p>

        <div className="w-full max-w-4xl bg-neutral-50 h-fit py-8 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg shadow-2xl mt-8">
          {team.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 py-6 border-b border-neutral-200 last:border-b-0"
            >
              <div
                className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex-shrink-0 bg-cover bg-center bg-no-repeat shadow-lg`}
                style={{
                  backgroundImage: `url('${item.profile}')`,
                }}
              />

              <div
                id={item.id}
                className="flex flex-col text-center sm:text-left"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2773a6] mb-1">
                  {item.name}
                </p>
                <p className="text-neutral-700 text-base sm:text-lg">
                  Take the first step toward financial independence{" "}
                </p>
                <Link
                  to={item.idecide}
                  target="_blank"
                  className="hover:underline text-[#2773a6]"
                >
                  —[click here to watch our interactive presentation]!
                </Link>

                <p className="text-neutral-700 text-base sm:text-lg mt-4">
                  Protect your retirement and lower your taxes{" "}
                </p>
                <Link
                  to={item.mnr}
                  target="_blank"
                  className="hover:underline text-[#2773a6]"
                >
                  —[click here to find out how]!
                </Link>
                <Link
                  to={item.calendly}
                  target="_blank"
                  className="hover:underline text-[#2773a6]"
                >
                  —[schedule a time with us today]!
                </Link>

                <p className="text-neutral-700 text-base sm:text-lg mt-4">
                  Email:{" "}
                  <Link
                    to={`mailto:${item.email}`}
                    className="hover:underline hover:text-[#2773a6]"
                  >
                    {item.email}
                  </Link>
                </p>
                <p className="text-neutral-700 text-base sm:text-lg">
                  Phone: {item.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 w-[100%]">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
