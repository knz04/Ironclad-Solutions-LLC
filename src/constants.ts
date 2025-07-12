import andre from "./assets/andre-scroggie.jpeg";
import augie from "./assets/augie-bowdry.jpeg";
import kevin from "./assets/kevin-caballero.jpeg";
import sean from "./assets/sean-spengler.jpeg";

interface Team {
  profile: string;
  name: string;
  email: string;
  phone: string;
}

export const team: Team[] = [
  {
    profile: sean,
    name: "Sean Spengler",
    email: "",
    phone: "",
  },
  {
    profile: augie,
    name: "Augie Bowdry",
    email: "",
    phone: "",
  },
  {
    profile: andre,
    name: "André Scroggie",
    email: "",
    phone: "",
  },

  {
    profile: kevin,
    name: "Kevin Caballero",
    email: "",
    phone: "",
  },
];
