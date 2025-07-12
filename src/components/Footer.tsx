import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 px-4 font-inter">
      {" "}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:items-start gap-8 md:gap-x-12">
        {" "}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 min-w-[280px]">
          <div className="flex flex-row gap-x-6 mb-4">
            <Link
              to="/privacy"
              rel="noopener noreferrer"
              className="text-neutral-50 hover:underline text-lg font-bold"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
            {" "}
            IronClad Solutions LLC is a licensed representative of various life
            insurance and financial service providers. All strategies are for
            educational purposes and do not constitute financial advice.
            Licensing and availability vary by state.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 min-w-[200px]">
          <Link
            to="/contact"
            className="text-lg font-bold hover:underline text-neutral-50 mb-4"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center md:text-right flex-1 min-w-[180px]">
          <p className="text-sm text-neutral-400">
            COPYRIGHT © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
