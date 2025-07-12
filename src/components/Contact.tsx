import { Link } from "react-router-dom";
import contact from "../assets/contact.png";
import Form from "./Form";

function Contact() {
  return (
    <div className="relative flex flex-row md:min-h-[60vh] 2xl:min-h-[50vh] justify-evenly items-center py-12 px-4 bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 z-0 grayscale opacity-15"
        style={{
          backgroundImage: `url('${contact}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col pb-8">
        <p className="text-2xl md:text-4xl font-semibold text-center transition hover:text-[#2773a6] text-neutral-50 pb-2 z-1">
          Let's Get In Touch.
        </p>
        <p className="text-base md:text-xl font-light text-center text-neutral-50 z-1">
          Reach out to us, we're happy to help.
        </p>
        <button className="justify-items-center bg-[#2773a6] hover:bg-[#28679a] hover:cursor-pointer mt-6 py-4 px-4 z-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-115">
          <Link to="/contact" className="text-neutral-50">
            Contact Us
          </Link>
        </button>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
