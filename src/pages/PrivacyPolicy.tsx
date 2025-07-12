function PrivacyPolicy() {
  return (
    <div className="bg-neutral-50 w-full ">
      <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl mx-auto py-12 md:py-16">
        <h1 className="font-bold">Privacy Policy for Ironclad Solutions LLC</h1>

        <div className="flex flex-col gap-y-6 md:gap-y-8">
          <p className="text-sm text-neutral-600 leading-relaxed mb-2">
            <strong>Effective Date:</strong> 07/01/2025
          </p>
          <p className="mb-4 leading-relaxed">
            Welcome to Ironclad Solutions LCC. We are committed to protecting
            the privacy of our users. This Privacy Policy outlines how we
            collect, user, and safeguard your information.
          </p>
          <ol className="list-decimal leading-relaxed">
            {/* No. 1 */}
            <strong>
              <li>Information We Collect</li>
            </strong>
            <p className="leading-relaxed">
              We may collect personal information from users when they engage
              with our site or participate in our advocacy programs. This
              information may include:
            </p>
            <ul className="pl-4 list-disc">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Any additional information you voluntarily provide</li>
            </ul>

            {/* No. 2 */}
            <strong>
              <li className="mt-8">How We Use Your Information</li>
            </strong>
            <p className="leading-relaxed">
              The information collected is used solely for our outreach and
              advocacy efforts. Our objectives include:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Engaging with individuals to enhance awareness about income
                replacement
              </li>
              <li>
                Facilitating communication between you and our advocacy team
              </li>
              <li>Providing updates on our initiatives and programs</li>
            </ul>
            <p className="mt-2 leading-relaxed">
              Your personal information is used exclusively within Ironclad
              Solutions LLC and is not shared with third parties outside of our
              network of advocates. No mobile information will be shared with
              third parties/affiliates for marketing/promotional purposes. All
              other categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties
            </p>

            {/* No. 3 */}
            <strong>
              <li className="mt-8">Data Protection Measures</li>
            </strong>
            <p className="leading-relaxed">
              We prioritize the security of your information and have
              implemented several measures to protect it:
            </p>
            <ul className="pl-4 list-disc">
              <li>Secure servers to store personal data</li>
              <li>Encryption protocols for data transmission</li>
              <li>Regular security audits and updates</li>
            </ul>

            {/* No. 4 */}
            <strong>
              <li className="mt-8">User Rights</li>
            </strong>
            <p className="leading-relaxed">You have the right to:</p>
            <ul className="pl-4 list-disc">
              <li>Access your personal information</li>
              <li>Request corrections to inaccuracies in your data</li>
              <li>
                Request deletion of your personal data, subject to legal and
                operational restrictions
              </li>
            </ul>
            <p className="mt-2 leading-relaxed">
              To exercise these rights, please contact us using the information
              provided below.
            </p>

            {/* No. 5 */}
            <strong>
              <li className="mt-8">Contact Us</li>
            </strong>
            <p className="leading-relaxed">
              If you have any questions, concerns, or requests related to your
              personal information or this Privacy Policy, please contact:
            </p>
            <ul>
              <li>Ironclad Solutions LLC Privacy Team</li>
              <li>Email: privacy@ironcladsolutionsfl.com</li>
              <li>Address: United States of America</li>
            </ul>

            {/* No. 6 */}
            <strong>
              <li className="mt-8">Changes to this Policy</li>
            </strong>
            <p className="leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in our practices. We will notify you of any significant changes by
              posting the new policy on our website with the effective date.
            </p>
            <p className="mt-2 leading-relaxed">
              By using our website, you consent to the terms of this Privacy
              Policy. We encourage you to review it regularly to stay informed
              about how we are protecting your information.
            </p>
            <p className="mt-2 leading-relaxed">
              Thank you for supporting Ironclad Solutions LLC and our mission of
              income replacement advocacy.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
