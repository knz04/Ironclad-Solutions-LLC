import { useState } from "react";
import { Link } from "react-router-dom";
import type { FormEvent } from "react";

function Unsubscribe() {
  const getKey = () => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;

      if (
        hostname === "icsfsfl.com" ||
        hostname === "www.icsfsfl.com" ||
        hostname === "https://www.icsfsfl.com/"
      ) {
        return "66a511a1-49f6-4576-ac12-2491d889980a";
      } else {
        return "7c2b11d3-440e-4f03-ab41-4c6a5683a361";
      }
    }
  };

  const CURRENT_ACCESS_KEY = getKey();
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const subject = `User Opted Out: ${name} Unsubscribed from IronClad Solutions LLC`;
    formData.append("subject", subject);

    formData.append(
      "access_key",
      CURRENT_ACCESS_KEY ?? "aecdc1f5-92d0-414c-b8ee-df48576fc611"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: { success: boolean; message: string } = await response.json();

      if (data.success) {
        setResult("Unsubscribed succesfully.");
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error", error);
      setResult("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-neutral-50 p-8 rounded-lg shadow-xl w-full md:w-[40%] z-1 mx-auto my-12">
      <div className="flex flex-col text-center md:text-left">
        <p className="text-lg font-semibold pb-4">
          Unsubscribe from IronClad Solutions LLC
        </p>

        <p className="text-lg font-light">
          Please fill out the form below to unsubscribe from all marketing
          communications.
        </p>
        <br />
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label htmlFor="name" className="text-neutral-800 font-medium text-lg">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2773a6]"
        />

        <label htmlFor="email" className="text-neutral-800 font-medium text-lg">
          Email Address (optional):
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2773a6]"
        />

        <label htmlFor="phone" className="text-neutral-800 font-medium text-lg">
          Mobile Phone Number (optional):
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2773a6]"
        />

        <button
          type="submit"
          className="bg-[#2773a6] hover:bg-[#28679a] text-neutral-50 font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-4"
        >
          Unsubscribe
        </button>
        {result}
      </form>

      <p className="text-xs sm:text-sm mt-6">
        You are receiving this message because you opted in to receive
        communications from IronClad Solutions LLC.
        <br />
        <Link to="/privacy" className="text-[#2773a6] hover:underline">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link to="/unsubscribe" className="text-[#2773a6] hover:underline">
          Unsubscribe
        </Link>
        <br />
        <br />
        IronClad Solutions LLC, United States of America
      </p>
    </div>
  );
}

export default Unsubscribe;
