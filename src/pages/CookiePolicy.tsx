import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cookie Policy - FollowFuse</title>
        <meta name="description" content="FollowFuse Cookie Policy - Learn how we use cookies to improve your experience" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <h2 className="text-xl text-gray-700 mb-4">FollowFuse Instagram Growth Agency</h2>
        <p className="text-gray-600 mb-8">Last Updated: April 2, 2024</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            At FollowFuse, we value your privacy and are committed to being transparent about how we use cookies on our website (the "Site"). This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences. By continuing to use our Site, you agree to the use of cookies in accordance with this policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. What Are Cookies?</h2>
          <p className="text-gray-700 mb-8">
            Cookies are small text files that are stored on your device when you visit a website. Cookies allow websites to remember your actions and preferences over time, such as your language choice, login details, or browsing history, to improve your browsing experience.
          </p>
          <p className="text-gray-700 mb-8">
            Cookies can be set by the website you visit (first-party cookies) or by other organizations that provide content or services on the website (third-party cookies).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">We use cookies on our Site to enhance your user experience, analyze website traffic, and serve personalized content and ads. Specifically, cookies help us:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Improve the functionality of our Site, making it more user-friendly and efficient.</li>
            <li className="mb-2">Analyze website traffic and performance to improve our content and services.</li>
            <li className="mb-2">Remember your preferences and settings to make your experience more convenient.</li>
            <li className="mb-2">Serve personalized advertisements and measure their effectiveness.</li>
            <li className="mb-2">Enhance security and prevent fraudulent activity, especially when processing payments and handling financial transactions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Types of Cookies We Use</h2>
          <p className="text-gray-700 mb-4">We use the following types of cookies on our Site:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-4"><span className="font-semibold">Essential Cookies:</span> These cookies are necessary for the operation of the Site, such as enabling secure logins, managing your preferences, and processing transactions. Without these cookies, the Site cannot function properly.</li>
            <li className="mb-4"><span className="font-semibold">Performance Cookies:</span> These cookies collect information about how visitors interact with our Site, including which pages are visited most frequently. They help us improve the functionality and performance of the Site by providing insights into how it is being used.</li>
            <li className="mb-4"><span className="font-semibold">Functional Cookies:</span> These cookies allow us to remember choices you make (such as your language preferences or region) and provide more personalized features and services. They improve your experience on the Site.</li>
            <li className="mb-4"><span className="font-semibold">Targeting/Advertising Cookies:</span> These cookies are used to deliver advertisements that are more relevant to you and your interests. They also help measure the effectiveness of our advertising campaigns.</li>
            <li className="mb-4"><span className="font-semibold">Analytics Cookies:</span> We use third-party analytics tools, such as Google Analytics, to collect and analyze data on how users interact with the Site. This helps us understand how the Site is used and where we can improve.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Third-Party Cookies</h2>
          <p className="text-gray-700 mb-8">
            We allow third-party service providers (such as analytics tools, advertising networks, and payment processors) to set cookies on our Site. These third parties may collect information about your use of the Site and other websites to analyze data, serve ads, and track user behavior. These third-party cookies are subject to the privacy policies of the respective providers.
          </p>
          <p className="text-gray-700 mb-8">
            When processing payments or handling financial transactions, cookies may be used to ensure security, prevent fraud, and facilitate the smooth completion of transactions. For more information on how third-party providers use cookies and process your data, please review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. User Consent for Cookies</h2>
          <p className="text-gray-700 mb-8">
            We respect your privacy and ensure that cookies are only used for purposes that are in line with your preferences. By continuing to use our Site, you consent to the use of cookies as outlined in this policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Managing Cookies</h2>
          <p className="text-gray-700 mb-8">
            We use cookies for a variety of reasons, as detailed above. Unfortunately, in most cases, there are no industry-standard options for disabling cookies without completely disabling the functionality and features they add to this website. We recommend leaving all cookies on unless you are certain you need to adjust them, as they may be used to provide a service you rely on.
          </p>
          <p className="text-gray-700 mb-8">
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for instructions). Be aware that disabling cookies will affect the functionality of this and many other websites you visit. Disabling cookies will usually result in also disabling certain features and functionality of this site. Therefore, it is recommended that you do not disable cookies unless absolutely necessary.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Do Not Track Signals</h2>
          <p className="text-gray-700 mb-8">
            Some web browsers allow you to send a "Do Not Track" signal to websites, indicating that you do not want to be tracked. At this time, we do not alter our data collection practices in response to "Do Not Track" signals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Changes to This Cookie Policy</h2>
          <p className="text-gray-700 mb-8">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this policy periodically to stay informed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Contact Us</h2>
          <p className="text-gray-700 mb-8">
            If you have any questions or concerns about this Cookie Policy or how we use cookies, please contact us at{' '}
            <a href="mailto:contact@followfuse.com" className="text-blue-600 hover:underline">
              contact@followfuse.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy; 