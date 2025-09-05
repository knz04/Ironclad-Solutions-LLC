import andre from "./assets/andre-scroggie.jpeg";
import augie from "./assets/augie-bowdry.jpeg";
import kevin from "./assets/kevin-caballero.jpeg";
import sean from "./assets/sean-spengler.jpeg";

interface BioSection {
  title?: string; // optional
  points: string[];
}

interface Team {
  id: string;
  profile: string;
  name: string;
  email: string;
  phone: string;
  calendly: string;
  idecide: string;
  mnr: string;
  title: string;
  bio: BioSection[]; // now optional titles
}

export const team: Team[] = [
  {
    id: "sean-spengler",
    profile: sean,
    name: "Sean Spengler",
    email: "sean.spengler@ira-a.org",
    phone: "(954) 830-1314",
    calendly: "https://calendly.com/sean-spengler/let-s-connect",
    idecide: "https://umustsee.net/ZFX6YF",
    mnr: "https://ironcladsolutionsfl.mynewretirement.com/en-us",
    title: "Managing Partner",
    bio: [
      {
        title: "Background",
        points: [
          "25+ years in Engineering & Technology",
          "Experience with Motorola, Magic Leap & Royal Caribbean",
          "Expertise in problem-solving, process optimization & systems design",
        ],
      },
      {
        title: "Transition to Finance",
        points: [
          "Applying technical precision to financial strategy design",
          "Licensed Financial Professional",
        ],
      },
      {
        title: "Mission",
        points: [
          "Protect income & loved ones",
          "Grow wealth with confidence",
          "Build retirement strategies",
          "Estate planning",
          "Create lasting legacies",
        ],
      },
    ],
  },
  {
    id: "augie-bowdry",
    profile: augie,
    name: "Augie Bowdry",
    email: "augie.bowdry@ira-a.org",
    phone: "(415) 794-2790",
    calendly: "https://calendly.com/andre-scroggie",
    idecide: "https://umustsee.net/JMH7TR",
    mnr: "https://andre-scroggie.mynewretirement.com/",
    title: "Head of Client Success",
    bio: [
      {
        points: [
          "B.S. in Global Business Management",
          "Retail Banking industry 16 years",
          "Insurance Agent 13 years",
          "Focused on reducing tax exposure, safeguarding wealth, and building lasting retirement income",
          "Engaged to André Scroggie",
          "Proud parent of a 1 year old Pomeranian",
        ],
      },
    ],
  },
  {
    id: "andre-scroggie",
    profile: andre,
    name: "André Scroggie",
    email: "andre.scroggie@ira-a.org",
    phone: "(305) 912-6373",
    calendly: "https://calendly.com/andre-scroggie",
    idecide: "https://umustsee.net/JMH7TR",
    mnr: "https://andre-scroggie.mynewretirement.com/",
    title: "Chief Strategy",
    bio: [
      {
        points: [
          "University of California, Santa Cruz",
          "Computer Engineer 13 years",
          "Realtor/Mortgage broker 6 years",
          "Financial Advisor 6 years",
          "Insurance Agent 18 years",
          "Specialize in protecting assets, minimizing taxes, and generating retirement income",
          "Engaged to Augie Bowdry",
          "Proud parent of a 1 year old Pomeranian",
        ],
      },
    ],
  },
  {
    id: "kevin-caballero",
    profile: kevin,
    name: "Kevin Caballero",
    email: "kevin.caballero@ira-a.org",
    phone: "(912) 809-0459",
    calendly:
      "https://calendly.com/kevin-caballero-ira-a/financial-protection-planning-session",
    idecide: "https://umustsee.net/WHH1AV",
    mnr: "https://kevin-caballero.mynewretirement.com/",
    title: "Intake Advisor",
    bio: [
      {
        title: "Background",
        points: [
          "7+ years in technical & service industries",
          "Skilled in precision, problem-solving, and client-focused solutions",
        ],
      },
      {
        title: "Finance Transition",
        points: [
          "Applying analytical skills to financial protection & estate planning",
          "Specialized in life insurance, retirement, and legacy strategies",
        ],
      },
      {
        title: "Mission",
        points: [
          "Helping families protect income & assets",
          "Guiding clients to build wealth, secure retirement, and leave legacies",
        ],
      },
    ],
  },
];
