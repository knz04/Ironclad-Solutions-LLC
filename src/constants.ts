import andre from "./assets/andre-scroggie.jpeg";
import augie from "./assets/augie-bowdry.jpeg";
import kevin from "./assets/kevin-caballero.jpeg";
import sean from "./assets/sean-spengler.jpeg";

interface Team {
  id: string;
  profile: string;
  name: string;
  email: string;
  phone: string;
  calendly: string;
  idecide: string;
  mnr: string;
}

export const team: Team[] = [
  {
    id: "sean-spengler",
    profile: sean,
    name: "Sean Spengler",
    email: "sean.spengler@ira-a.org",
    phone: "954-830-1314",
    calendly: "https://calendly.com/sean-spengler/20-minute-agent-meet-greet",
    idecide: "https://umustsee.net/ZFX6YF",
    mnr: "https://ironcladsolutionsfl.mynewretirement.com/en-us",
  },
  {
    id: "augie-bowdry",
    profile: augie,
    name: "Augie Bowdry",
    email: "augie.bowdry@ira-a.org",
    phone: "415-794-2790",
    calendly: "https://calendly.com/andre-scroggie",
    idecide: "https://umustsee.net/JMH7TR",
    mnr: "https://andre-scroggie.mynewretirement.com/",
  },
  {
    id: "andre-scroggie",
    profile: andre,
    name: "André Scroggie",
    email: "andre.scroggie@ira-a.org",
    phone: "305-912-6373",
    calendly: "https://calendly.com/andre-scroggie",
    idecide: "https://umustsee.net/JMH7TR",
    mnr: "https://andre-scroggie.mynewretirement.com/",
  },
  {
    id: "kevin-caballero",
    profile: kevin,
    name: "Kevin Caballero",
    email: "kevin.caballero@ira-a.org",
    phone: "912-809-0459",
    calendly:
      "https://calendly.com/kevin-caballero-ira-a/financial-protection-planning-session",
    idecide: "https://umustsee.net/WHH1AV",
    mnr: "https://kevin-caballero.mynewretirement.com/",
  },
];
