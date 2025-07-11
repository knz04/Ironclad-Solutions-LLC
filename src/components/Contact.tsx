import contact from "../assets/contact.png";
import Form from "./Form";

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

      <Form />
    </div>
  );
}

export default Contact;
