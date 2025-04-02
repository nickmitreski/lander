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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy for FollowFuse</h1>
        <p className="text-gray-600 mb-8">Last Updated: 2/4/25</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            FollowFuseApp ("we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services (the "Services") or visit our website (the "Site"). By using our Services or visiting our Site, you agree to the practices described in this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect several types of information in order to provide and improve our Services to you:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Personal Information</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Account Information:</strong> When you create an account with FollowFuseApp, we collect personal information such as your name and email address.</li>
            <li className="mb-2"><strong>Payment Information:</strong> We collect payment details (credit card numbers) for billing purposes when you subscribe to our services. This data is processed securely by a third-party payment processor and is never stored on our servers.</li>
            <li className="mb-2"><strong>Usage Data:</strong> We automatically collect information about your interactions with our website and Services, including your IP address, browser type, pages visited, timestamps, and device information. This helps us analyze trends, administer the Site, and improve user experience.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Non-Personal Information</h3>
          <p className="text-gray-700 mb-8">We may collect non-identifiable information such as demographic data, general location (such as city or country), and information related to your activities on our Site and Services.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Providing Services:</strong> To operate and deliver the Services you've requested, including account management, billing, and customer support.</li>
            <li className="mb-2"><strong>Personalization:</strong> To tailor our Services, content, and offers based on your preferences and usage behavior.</li>
            <li className="mb-2"><strong>Communication:</strong> To send you account-related updates, newsletters, promotional offers, and other information you've agreed to receive. You can opt-out of marketing communications at any time.</li>
            <li className="mb-2"><strong>Security:</strong> To protect the integrity of our Site and Services, including detecting and preventing fraud or unauthorized access.</li>
            <li className="mb-2"><strong>Legal Obligations:</strong> To comply with applicable laws and regulations, including any requests for information from law enforcement or regulatory bodies.</li>
          </ul>

          {/* Continue with remaining sections... */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. How We Share Your Information</h2>
          {/* Add content for sections 3-10 following the same pattern */}

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at{' '}
              <a href="mailto:contact@followfuseapp.com" className="text-blue-600 hover:underline">
                contact@followfuseapp.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 