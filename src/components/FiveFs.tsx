import {
  BanknoteArrowUp,
  ChartBarIncreasing,
  Handshake,
  ShieldHalf,
  SquarePen,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface Content {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  button: string;
  link: string;
}

const content: Content[] = [
  {
    icon: ShieldHalf,
    title: "Life Insurance & Protection",
    subtitle: "Income replacement, living benefits, and legacy strategies.",
    button: "Explore Life Insurance",
    link: "https://assets.corebridgefinancial.com/s7viewers/html5/VideoViewer.html?asset=aigdynamicmedia/chris-edwards-testimonial-cbf-AVS&config=aigdynamicmedia/Video",
  },
  {
    icon: BanknoteArrowUp,
    title: "Tax-Advantaged Money Growth",
    subtitle: "Risk-free, long-term wealth strategies using indexed products.",
    button: "Learn More",
    link: "https://ironcladsolutionsfl.mynewretirement.com/en-us",
  },
  {
    icon: SquarePen,
    title: "Mortgage Protection",
    subtitle: "Mortgage protection—aligned with a long-term financial vision.",
    button: "Explore Mortgage Services",
    link: "#",
  },
  {
    icon: Handshake,
    title: "Mentorship & Coaching",
    subtitle:
      "Guidance for people seeking purpose-aligned growth in business and life.",
    button: "Discover Mentorship",
    link: "https://umustsee.net/NDF3OC",
  },
  {
    icon: ChartBarIncreasing,
    title: "Business Opportunity",
    subtitle:
      "Join our platform and build a business that creates income, impact, and freedom.",
    button: "Explore the Opportunity",
    link: "https://umustsee.net/NDF3OC",
  },
];

function FiveFs() {
  return (
    <div className="lg:h-[120vh] 2xl:h-[70vh] bg-linear-to-b from-neutral-900 to-[#555759] py-8">
      <div className="flex flex-col justify-center items-center py-12">
        <p className="text-2xl md:text-4xl font-semibold text-neutral-50 pb-2">
          How We Can Help
        </p>
        <p className="text-base md:text-xl text-center font-light text-neutral-50">
          Financial strategy and mentorship grounded in the Five Fs:
        </p>
        <p className="text-base md:text-xl text-center text-neutral-50 font-bold">
          Faith, Family, Finance, Fitness, and Fun
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-y-2 md:gap-y-0 md:gap-x-2 px-1">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-[#2773a6] shadow-xl flex flex-col py-10"
          >
            <div className="self-center py-2">
              <item.icon color="#ffffff" className="self-center w-12 h-12" />
            </div>
            <p className="text-xl md:text-2xl/6 text-center font-semibold text-neutral-50 px-6 py-2">
              {item.title}
            </p>
            <p className="text-md md:text-lg text-center text-neutral-50 px-4 py-3">
              {item.subtitle}
            </p>

            <button className="bg-neutral-50 py-3 px-4 self-center hover:cursor-pointer shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to={item.link} target="_blank">
                <p className="text-sm text-center italic text-[#2773a6]">
                  → {item.button}
                </p>
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiveFs;
