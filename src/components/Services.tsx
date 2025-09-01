import {
  BriefcaseBusiness,
  BriefcaseMedical,
  Cross,
  HandHeart,
  House,
  TrendingUp,
} from "lucide-react";

interface Content {
  icon: React.ElementType;
  title: string;
  subtitle: string[];
}

const content: Content[] = [
  {
    icon: BriefcaseBusiness,
    title: "Estate Planning",
    subtitle: ["Wills", "Trusts", "Power of Attorney (Financial & Medical)"],
  },
  {
    icon: HandHeart,
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
    icon: House,
    title: "Family Legacy Services",
    subtitle: [
      'College Funds ("Million Dollar Baby")',
      "Infinite Banking Concepts",
    ],
  },
  {
    icon: Cross,
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
    <div className="flex flex-col gap-y-8 lg:flex-row justify-evenly items-center bg-[#555759] py-8 lg:h-[80vh]">
      <div>
        <p className="text-2xl md:text-4xl text-center lg:text-left font-semibold text-neutral-50 pb-2">
          Services
        </p>
        <p className="text-base md:text-xl text-center lg:text-left  font-light text-neutral-50">
          Here are the ser
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-y-8 gap-x-8 items-start">
        {content.map((item, index) => (
          <div key={index} className="text-left">
            <item.icon color="#ffffff" className="w-12 h-12 mb-2" />
            <p className="text-xl md:text-2xl/6 font-semibold text-neutral-50 mb-2">
              {item.title}
            </p>
            {item.subtitle.map((sub, subIndex) => (
              <li key={subIndex} className="text-md md:text-lg text-neutral-50">
                {sub}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
