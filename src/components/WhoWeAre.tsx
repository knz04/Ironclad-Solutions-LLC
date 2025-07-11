import React from "react";
import andre from "../assets/andre-scroggie.jpeg";
import augie from "../assets/augie-bowdry.jpeg";
import kevin from "../assets/kevin-caballero.jpeg";
import sean from "../assets/sean-spengler.jpeg";
import { Facebook, Instagram } from "lucide-react";

interface Team {
  profile: string;
  name: string;
}

const team: Team[] = [
  {
    profile: augie,
    name: "Augie Bowdry",
  },

  {
    profile: andre,
    name: "André Scroggie",
  },

  {
    profile: sean,
    name: "Sean Spengler",
  },

  {
    profile: kevin,
    name: "Kevin Caballero",
  },
];

function WhoWeAre() {
  return (
    <div className="md:h-[65vh] bg-linear-to-b from-[#555759] to-neutral-900">
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-2xl md:text-4xl font-semibold text-neutral-50 pb-2">
          Who We Are
        </p>
        <p className="text-base md:text-xl font-light text-neutral-50">
          Meet the dedicated professionals behind our success.
        </p>
      </div>
      <div className="grid gap-y-12 md:gap-y-0 md:grid-cols-4 py-8">
        {team.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div
              className={`w-56 h-56 md:w-60 md:h-60 rounded-full mb-4 bg-cover bg-center bg-no-repeat shadow-2xl`}
              style={{
                backgroundImage: `url('${item.profile}')`,
              }}
            />
            <p className="hover:text-[#2773a6] transition text-base md:text-xl font-light text-neutral-50 pt-2">
              {item.name}
            </p>
            <div className="flex py-2 gap-x-1">
              <Instagram color="#ffffff" />
              <Facebook color="#ffffff" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeAre;
