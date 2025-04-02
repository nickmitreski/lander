import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - FollowFuse</title>
        <meta name="description" content="FollowFuse Terms of Service - Our service agreement and policies" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Terms of Service FollowFuse</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Services Overview</h2>
          <p className="text-gray-700 mb-6">
            FollowFuseApp provides comprehensive social media services designed to enhance your Instagram presence and achieve your specific goals. Our services include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li className="mb-3"><strong>Account optimization:</strong> Tailoring your profile and content to align with best practices for engagement and visibility.</li>
            <li className="mb-3"><strong>Engagement strategies:</strong> Implementing targeted actions to increase interactions with your audience and boost your reach.</li>
            <li className="mb-3"><strong>Audience development:</strong> Building and nurturing a relevant and engaged audience through customized approaches.</li>
            <li className="mb-3"><strong>Content strategy and curation:</strong> Creating and planning content that resonates with your target audience and supports your brand vision.</li>
            <li className="mb-3"><strong>Analytics and performance tracking:</strong> Providing insights and reports on account performance, helping you assess progress and adjust strategies.</li>
            <li className="mb-3"><strong>Community engagement:</strong> Actively participating in and managing interactions with followers to foster a loyal community.</li>
            <li className="mb-3"><strong>Brand building:</strong> Helping you establish and strengthen your brand identity through focused social media initiatives.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Account Registration and Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            To access our Services, you must create an account by providing accurate and up-to-date information. You agree to keep this information current and accurate throughout the duration of your subscription.
          </p>
          <p className="text-gray-700 mb-8">
            You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Subscription and Payment Terms</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Subscription Options</h3>
          <p className="text-gray-700 mb-4">
            FollowFuseApp offers various subscription plans. By selecting a subscription, you agree to pay the fees associated with that plan. All payments are processed securely and automatically. Our subscription plans may include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Trial Period (if applicable): A no-cost trial period where you may evaluate the Services.</li>
            <li className="mb-2">Recurring Subscriptions: After the trial or initial term, your subscription will automatically renew at the end of each billing cycle.</li>
          </ul>

          {/* Continue with remaining sections... */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Cancellation and Refund Policy</h2>
          {/* Add content for sections 4-10 following the same pattern */}

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfService; 