import { Link } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";

function Form() {
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
    const subject = `New Subscription: ${name} subscribed to updates from IronClad Solutions LLC.`;
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
        setResult("Subscribed successfully.");
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
    <div className="bg-neutral-50 p-8 rounded-lg shadow-xl w-full md:w-[40%] z-1">
      <div className="flex flex-col text-center md:text-left">
        <p className="text-lg font-semibold pb-4">
          Stay Connected with IronClad Solutions LLC
        </p>

        <p className="text-lg font-light">
          Fill out the form below to receive updates, promotions, and
          opportunities from IronClad Solutions LLC and our trusted partners.
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
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2773a6]"
        />

        <label htmlFor="phone" className="text-neutral-800 font-medium text-lg">
          Mobile Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2773a6]"
        />

        <label className="flex items-start text-neutral-700 text-sm md:text-base cursor-pointer mt-2">
          <input
            type="checkbox"
            name="consent"
            required
            className="mr-3 mt-1 accent-[#2773a6] transform scale-125"
          />
          I agree to receive marketing communications via phone call, text
          message, and email from IronClad Solutions LLC and its affiliates. I
          understand that consent is not a condition of purchase.
        </label>

        <button
          type="submit"
          className="bg-[#2773a6] hover:bg-[#28679a] text-neutral-50 font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-4"
        >
          Submit
        </button>
        {result}
      </form>
      <p className="text-xs sm:text-sm">
        <br />
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

export default Form;
