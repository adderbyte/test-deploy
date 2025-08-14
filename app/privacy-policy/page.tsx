import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-200 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Privacy Policy</h1>
        
        <p className="text-sm text-center text-gray-500 mb-12">Last updated: November 15, 2025</p>

        {/* --- What we collect section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">1. Information We Collect</h2>
          <p className="mb-4">
            Polymarq ("we," "us," or "our") collects various types of information to provide and improve our services.
            The types of information we collect may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Personal Identification Information:</span> Name, email address, phone number, and other contact details when you create an account, contact us, or interact with our services.
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Usage Data:</span> Information about how you access and use our services, such as your IP address, browser type, device information, and pages you visit.
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">System and Sensor Data:</span> Data collected from real-world systems and sensors connected to our platform to provide our core services.
            </li>
          </ul>
        </div>

        {/* --- How we use your information section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              To provide, operate, and maintain our services.
            </li>
            <li>
              To improve, personalize, and expand our services.
            </li>
            <li>
              To understand and analyze how you use our services.
            </li>
            <li>
              To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.
            </li>
            <li>
              To detect and prevent fraud.
            </li>
            <li>
              For compliance with legal obligations.
            </li>
          </ul>
        </div>

        {/* --- Sharing your information section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">3. Sharing and Disclosure of Information</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your information with third parties in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Service Providers:</span> We may share your data with trusted third-party service providers who assist us in operating our business and providing services to you (e.g., cloud hosting, analytics).
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Legal Compliance:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency).
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Business Transfers:</span> If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred.
            </li>
          </ul>
        </div>

        {/* --- Your rights section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">4. Your Data Protection Rights</h2>
          <p className="mb-4">
            You have certain data protection rights, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              The right to access, update, or delete the information we have on you.
            </li>
            <li>
              The right to object to our processing of your personal data.
            </li>
            <li>
              The right to request that we restrict the processing of your personal information.
            </li>
            <li>
              The right to withdraw consent at any time where we rely on your consent to process your personal information.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            To exercise these rights, please contact us at <a href="mailto:support@polymarq.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@polymarq.com</a>.
          </p>
        </div>

        {/* --- Security and children's privacy section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">5. Data Security and Children's Privacy</h2>
          <p className="mb-4">
            We use a variety of security measures to protect your information, but no method of transmission over the internet is 100% secure. We cannot guarantee its absolute security.
          </p>
          <p className="mb-4">
            Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
        </div>

        {/* --- Changes and contact section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">6. Changes to This Policy and Contact Us</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <a href="mailto:support@polymarq.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">support@polymarq.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

