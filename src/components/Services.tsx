import {
  Banknote,
  BriefcaseBusiness,
  BriefcaseMedical,
  HandHeart,
  House,
  TrendingUp,
} from "lucide-react";
import logo from "../assets/logo.png";

interface Content {
  icon: React.ElementType;
  title: string;
  subtitle: string[];
}

const content: Content[] = [
  {
    icon: House,
    title: "Estate Planning",
    subtitle: ["Wills", "Trusts", "Power of Attorney (Financial & Medical)"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Life Insurance",
    subtitle: [
      "Whole Life",
      "Indexed Universal Life (IUL)",
      "Term Life",
      "Final Expense",
    ],
  },
  {
    icon: TrendingUp,
    title: "Wealth & Retirement Planning",
    subtitle: ["Tax-Free Retirement", "Indexed Annuities", "401(K) Rollovers"],
  },
  {
    icon: HandHeart,
    title: "Family Legacy Services",
    subtitle: [
      'College Funds ("Million Dollar Baby")',
      "Infinite Banking Concepts",
    ],
  },
  {
    icon: Banknote,
    title: "Debt & Income Protection",
    subtitle: ["Debt Consolidation"],
  },
  {
    icon: BriefcaseMedical,
    title: "Supplemental Health Insurance",
    subtitle: ["Accident", "Critical Illness", "Hospital Indemnity"],
  },
];

function Services() {
  return (
    <div className="relative flex flex-col gap-y-12 lg:flex-row justify-evenly items-center bg-[#555759] py-12 min-h-screen">
      {/* Background logo */}
      <img
        src={logo}
        alt="Logo background"
        className="hidden lg:block absolute lg:-left-1/4 xl:-left-1/3 2xl:left-10 
             lg:h-[44rem] xl:h-[52rem] 2xl:h-[60rem] 
             grayscale opacity-20 
             hover:filter-none hover:opacity-40 
             transition-all duration-300 ease-in-out z-0"
      />

      {/* Section heading */}
      <div className="z-10 text-center lg:text-left">
        <p className="text-2xl md:text-4xl font-semibold text-neutral-50 pb-2">
          Services
        </p>
        <p className="text-base md:text-xl font-light text-neutral-50">
          Here are the services we provide.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid gap-y-8 gap-x-12 lg:grid-cols-2 z-10">
        {content.map((item, index) => (
          <div key={index} className="text-left">
            <item.icon color="#ffffff" className="w-12 h-12 mb-3" />
            <p className="text-xl md:text-2xl font-semibold text-neutral-50 mb-2">
              {item.title}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {item.subtitle.map((sub, subIndex) => (
                <li
                  key={subIndex}
                  className="text-md md:text-lg text-neutral-50"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
