import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const getEmail = () => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;

      if (
        hostname === "icsfsfl.com" ||
        hostname === "www.icsfsfl.com" ||
        hostname === "https://www.icsfsfl.com/"
      ) {
        return "info@icsfsfl.com";
      } else {
        return "info@ironcladsolutionsfl.com";
      }
    }
  };
  const currentContactEmail = getEmail();

  return (
    <div className="bg-neutral-50 w-full ">
      <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl mx-auto py-12 md:py-16">
        <h1 className="font-bold">Privacy Policy for Ironclad Solutions LLC</h1>

        <div className="flex flex-col gap-y-6 md:gap-y-8">
          <p className="text-sm text-neutral-600 leading-relaxed mb-2">
            <strong>Effective Date:</strong> 07/01/2025
          </p>
          <p className="mb-4 leading-relaxed">
            Welcome to Ironclad Solutions LLC. Your privacy is important to us.
            This Privacy Policy explains how we collect, use, share, and protect
            your personal information when you interact with our website,
            products, and services.
          </p>

          <ol className="list-decimal leading-relaxed">
            {/* 1. Information We Collect */}
            <strong>
              <li>Information We Collect</li>
            </strong>
            <p className="leading-relaxed">
              We may collect the following types of personal information:
            </p>
            <ul className="pl-4 list-disc">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (including mobile)</li>
              <li>Mailing address</li>
              <li>Business or employment information (if provided)</li>
              <li>Other voluntarily provided information</li>
              <li>
                Technical data such as IP address, browser type, and usage
                behavior
              </li>
            </ul>

            {/* 2. How We Use Your Information */}
            <strong>
              <li className="mt-8">How We Use Your Information</li>
            </strong>
            <p className="leading-relaxed">
              We may use your personal information to:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Contact you via phone call, text message, or email regarding our
                services, promotions, and offers
              </li>
              <li>
                Share relevant updates, educational content, or newsletters
              </li>
              <li>Customize product or service recommendations</li>
              <li>Fulfill legal and regulatory requirements</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p className="mt-2 leading-relaxed">
              By providing your mobile number, you consent to receive SMS/text
              messages from Ironclad Solutions LLC and its affiliates for
              marketing, promotional, or informational purposes. Message and
              data rates may apply.
            </p>

            {/* 3. Information Sharing */}
            <strong>
              <li className="mt-8">Information Sharing</li>
            </strong>
            <p className="leading-relaxed">
              We may share your information, including mobile numbers, with:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Business partners and affiliates for marketing, promotional, or
                operational purposes
              </li>
              <li>
                Authorized associates, consultants, and representatives working
                with or on behalf of Ironclad Solutions LLC
              </li>
              <li>
                Third-party service providers such as marketing platforms,
                texting platforms, email systems, and CRM tools
              </li>
              <li>
                Legal or regulatory authorities when required by law or to
                protect our rights
              </li>
            </ul>
            <p className="mt-2 leading-relaxed">
              By submitting your contact information, you agree that your mobile
              number and other data may be shared with approved partners and
              affiliates for relevant marketing and promotional communication.
            </p>
            <p className="leading-relaxed">
              You may opt out of such communications at any time by following
              the instructions provided in the message or by contacting us
              directly.
            </p>

            {/* 4. Your Privacy Choices */}
            <strong>
              <li className="mt-8">Your Privacy Choices</li>
            </strong>
            <p className="leading-relaxed">You may:</p>
            <ul className="pl-4 list-disc">
              <li>Access your personal data</li>
              <li>Update or correct inaccuracies</li>
              <li>Opt out of marketing messages (email, SMS, or calls)</li>
              <li>
                Request deletion of your personal information, subject to legal
                requirements
              </li>
            </ul>
            <p className="mt-2 leading-relaxed">
              To opt out or submit a request, contact:{" "}
              <Link
                className="text-[#2773a6] underline"
                to={`mailto:${currentContactEmail}`}
              >
                {currentContactEmail}
              </Link>
            </p>

            {/* 5. Data Protection */}
            <strong>
              <li className="mt-8">Data Protection</li>
            </strong>
            <p className="leading-relaxed">
              We implement reasonable safeguards, including:
            </p>
            <ul className="pl-4 list-disc">
              <li>Encrypted data transmission</li>
              <li>Secure servers and access control</li>
              <li>Regular system audits and updates</li>
            </ul>

            {/* 6. Changes to This Policy */}
            <strong>
              <li className="mt-8">Changes to This Policy</li>
            </strong>
            <p className="leading-relaxed">
              We may update this policy periodically. Updates will be posted on
              this page with the effective date. Continued use of our services
              implies acceptance of the updated policy.
            </p>

            {/* 7. Contact Us */}
            <strong>
              <li className="mt-8">Contact Us</li>
            </strong>
            <ul>
              <li>Ironclad Solutions LLC – Privacy Team</li>
              <li>
                Email:{" "}
                <Link
                  className="text-[#2773a6] underline"
                  to={`mailto:${currentContactEmail}`}
                >
                  {currentContactEmail}
                </Link>
              </li>
              <li>Mailing Address:</li>
              <p>
                6272 Harbor Bnd
                <br />
                Margate, FL 33063
              </p>
            </ul>

            <p className="mt-4 leading-relaxed">
              By submitting your information or using our site, you consent to
              the collection, use, and sharing of your information as outlined
              in this policy, including mobile communications and affiliate
              marketing.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
