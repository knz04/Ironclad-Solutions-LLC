import React from "react";
import contact from "../assets/contact.png";

function Contact() {
  return (
    <div className="relative flex flex-col md:min-h-screen 2xl:min-h-[70vh] justify-center items-center py-12 px-4 bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 z-0 grayscale opacity-15" // Removed 'top-90' and 'bf'
        style={{
          backgroundImage: `url('${contact}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col justify-center pb-8">
        <p className="text-2xl md:text-4xl font-semibold text-center text-neutral-50 pb-2">
          Contact Us
        </p>
        <p className="text-base md:text-xl font-light text-center text-neutral-50">
          Didn't find your answer? Reach out to us, we're happy to help.
        </p>
      </div>

      <form className="w-full max-w-2xl bg-white/90 p-8 shadow-xl z-10">
        {" "}
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <div className="flex flex-col flex-1 mb-4 md:mb-0">
              <label
                htmlFor="name"
                className="font-semibold text-neutral-700 mb-1"
              >
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#2773a6] transition-all duration-200"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="email"
                className="font-semibold text-neutral-700 mb-1"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#2773a6] transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="font-semibold text-neutral-700 mb-1"
            >
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g., +1 (555) 123-4567"
              className="border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#2773a6] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="font-semibold text-neutral-700 mb-1"
            >
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us how we can help you..."
              className="border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#2773a6] resize-y transition-all duration-200"
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mt-1 mr-2 h-5 w-5 text-[#2773a6] border-neutral-300  focus:ring-[#2773a6]"
            />
            <label
              htmlFor="terms"
              className="text-sm text-neutral-600 cursor-pointer"
            >
              I agree to receive marketing and customer service calls and text
              messages from Ironclad Solutions LLC. Consent is not a condition
              of purchase. Msg/data rates may apply. Msg frequency varies. Reply
              STOP to unsubscribe.{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2773a6] hover:underline"
              >
                Privacy Policy & Terms of Service
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#2773a6] hover:bg-[#28679a] hover:cursor-pointer text-neutral-50 font-semibold py-3 px-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 self-center mt-4"
          >
            <p className="text-base">Send</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
