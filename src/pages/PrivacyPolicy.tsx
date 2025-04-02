import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - FollowFuse</title>
        <meta name="description" content="FollowFuse Privacy Policy - Learn how we protect and handle your data" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <h2 className="text-xl text-gray-700 mb-8">FollowFuse Instagram Growth Agency</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            FollowFuse values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services. By accessing or using FollowFuse, you consent to the practices described in this policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">When you sign up for our services, we may collect the following information:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Account Information: Your name, email address, and Instagram username.</li>
            <li className="mb-2">Payment Information: Billing details necessary for processing payments (handled securely through third-party payment processors; we do not store your credit card details).</li>
            <li className="mb-2">Usage Data: Information about how you interact with our services, including engagement analytics.</li>
            <li className="mb-2">Communications: Any correspondence you send to us via email or support channels.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Provide, manage, and improve our services.</li>
            <li className="mb-2">Process transactions and send billing-related communications.</li>
            <li className="mb-2">Respond to inquiries and provide customer support.</li>
            <li className="mb-2">Enhance security and detect fraudulent or unauthorized activity.</li>
            <li className="mb-2">Send service-related updates and marketing communications (you may opt out at any time).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Security & Data Protection</h2>
          <p className="text-gray-700 mb-4">We take security seriously and implement advanced measures to protect your information. We:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Do not request, store, or have access to your Instagram password.</li>
            <li className="mb-2">Use encryption and secure authentication methods to safeguard personal data.</li>
            <li className="mb-2">Partner with reputable payment processors to ensure secure financial transactions.</li>
          </ul>
          <p className="text-gray-700 mb-8">
            While we take all reasonable steps to protect your information, we cannot guarantee absolute security. You acknowledge and accept that using any online service carries inherent risks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Data Sharing & Third Parties</h2>
          <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. However, we may share limited data with:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Service Providers: Third-party payment processors, analytics tools, and hosting services that help us operate FollowFuse.</li>
            <li className="mb-2">Legal Authorities: If required by law, court order, or government request.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Cookies & Tracking Technologies</h2>
          <p className="text-gray-700 mb-8">
            Our website may use cookies and similar tracking technologies to enhance your experience and analyze usage trends. You can adjust your browser settings to disable cookies, but some features of our services may not function properly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Your Rights & Choices</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Access, update, or delete your personal information by contacting us.</li>
            <li className="mb-2">Opt out of marketing communications.</li>
            <li className="mb-2">Request details on how your data is being used.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Data Retention</h2>
          <p className="text-gray-700 mb-8">
            We retain your information for as long as necessary to provide our services and comply with legal obligations. If you wish to have your data removed, contact us at contact@followfuse.com.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Updates to This Policy</h2>
          <p className="text-gray-700 mb-8">
            We may update this Privacy Policy periodically. Any changes will be posted on our website, and continued use of our services constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Contact Us</h2>
          <p className="text-gray-700 mb-8">
            If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@followfuse.com" className="text-blue-600 hover:underline">
              contact@followfuse.com
            </a>
          </p>

          <p className="text-gray-700 mt-12 p-6 bg-gray-50 rounded-xl">
            By using FollowFuse, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 