import { useState } from "react";
import { Link } from "react-router-dom";

function Unsubscribe() {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Cast the form elements
    const nameInput = form.elements.namedItem(
      "name"
    ) as HTMLInputElement | null;
    const emailInput = form.elements.namedItem(
      "email"
    ) as HTMLInputElement | null;
    const phoneInput = form.elements.namedItem(
      "phone"
    ) as HTMLInputElement | null;

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const phone = phoneInput?.value.trim() || "";

    // Your validation here
    if (!name) {
      setError("Please enter your full name.");
      return;
    }
    if (!email && !phone) {
      setError("Please enter either your email address or phone number.");
      return;
    }

    setError("");
    form.submit(); // or handle submission here if needed
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

      <form
        method="POST"
        action="mailto:info@ironclad" // replace with your actual endpoint
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
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

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-[#2773a6] hover:bg-[#28679a] text-neutral-50 font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-4"
        >
          Unsubscribe
        </button>
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
