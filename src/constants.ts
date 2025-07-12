import andre from "./assets/andre-scroggie.jpeg";
import augie from "./assets/augie-bowdry.jpeg";
import kevin from "./assets/kevin-caballero.jpeg";
import sean from "./assets/sean-spengler.jpeg";

interface Team {
  profile: string;
  name: string;
  email: string;
  phone: string;
  calendly: string;
}

export const team: Team[] = [
  {
    profile: sean,
    name: "Sean Spengler",
    email: "sean.spengler@ira-a.org",
    phone: "954-830-1314",
    calendly: "",
  },
  {
    profile: augie,
    name: "Augie Bowdry",
    email: "augie.bowdry@ira-a.org",
    phone: "415-794-2790",
    calendly: "",
  },
  {
    profile: andre,
    name: "André Scroggie",
    email: "andre.scroggie@ira-a.org",
    phone: "305-912-6373",
    calendly: "https://calendly.com/andre-scroggie",
  },

  {
    profile: kevin,
    name: "Kevin Caballero",
    email: "kevin.caballero@ira-a.org",
    phone: "912-809-0459",
    calendly: "",
  },
];
