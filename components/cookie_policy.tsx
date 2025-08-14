import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-200 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Cookie Policy</h1>
        
        <p className="text-sm text-center text-gray-500 mb-12">Last updated: November 15, 2025</p>

        {/* --- What are cookies section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">1. What are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit our website. They are widely used to make websites work more efficiently and provide information to the site owners.
          </p>
          <p>
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
          </p>
        </div>

        {/* --- How we use cookies section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">2. How We Use Cookies</h2>
          <p className="mb-4">
            Polymarq uses cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Essential Cookies:</span> These cookies are necessary to provide you with services available through our website and to enable you to use some of its features.
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Functionality Cookies:</span> These cookies allow our website to remember choices you make when you use the website, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience.
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Analytics and Performance Cookies:</span> These cookies are used to collect information about traffic to our website and how users use the website. The information gathered may include the number of visitors, the websites they came from, the pages they visited, and the time of their visit.
            </li>
          </ul>
        </div>

        {/* --- Your choices section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">3. Your Choices Regarding Cookies</h2>
          <p className="mb-4">
            If you wish to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
          </p>
          <p className="mb-4">
            You can learn more about cookies by visiting these third-party websites:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <a href="https://www.allaboutcookies.org" className="text-blue-600 dark:text-blue-400 hover:underline">All About Cookies</a>
            </li>
            <li>
              <a href="https://www.networkadvertising.org" className="text-blue-600 dark:text-blue-400 hover:underline">Network Advertising Initiative</a>
            </li>
          </ul>
        </div>

        {/* --- Contact section --- */}
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Cookie Policy, you can contact us at:
          </p>
          <p>
            <a href="mailto:support@polymarq.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">support@polymarq.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CookiePolicy;

