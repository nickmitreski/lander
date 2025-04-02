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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <h2 className="text-xl text-gray-700 mb-4">FollowFuse Instagram Growth Agency</h2>
        <p className="text-gray-600 mb-8">Last Updated: April 2, 2024</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            Welcome to FollowFuse, an Instagram growth agency specializing in organic engagement strategies, including follow/unfollow methods and liking posts to increase your account's visibility. By using our services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-8">
            By accessing or using FollowFuse's services, you agree to these Terms of Service and acknowledge that you have read, understood, and accepted them. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">FollowFuse provides Instagram growth services that include but are not limited to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Engaging with other users via the follow/unfollow method</li>
            <li className="mb-2">Liking posts on behalf of clients to enhance engagement and visibility</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Our services are designed to increase engagement; however, we do not guarantee specific results as growth is dependent on numerous factors, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">The quality and frequency of your content</li>
            <li className="mb-2">Your account's activity level</li>
            <li className="mb-2">Your audience and niche</li>
            <li className="mb-2">Instagram's algorithm changes</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. No Guarantee of Results</h2>
          <p className="text-gray-700 mb-8">
            While our services aim to improve your Instagram presence, we cannot guarantee specific follower counts, engagement levels, or any particular results. The effectiveness of our services is influenced by external factors beyond our control, such as Instagram's algorithm and your own content strategy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Compliance with Instagram's Policies</h2>
          <p className="text-gray-700 mb-4">You understand that our methods are designed to be as organic and compliant with Instagram's policies as possible. FollowFuse is not responsible for any actions taken by Instagram, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Account suspension or restrictions</li>
            <li className="mb-2">Shadowbanning</li>
            <li className="mb-2">Loss of engagement or followers</li>
          </ul>
          <p className="text-gray-700 mb-8">By using our services, you accept the risks associated with Instagram's policies.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Payment & Billing</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Our services are billed on a recurring basis unless otherwise specified.</li>
            <li className="mb-2">Payments are non-refundable unless otherwise agreed upon by FollowFuse in writing.</li>
            <li className="mb-2">You are responsible for ensuring that your payment details are up to date to avoid service interruptions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Cancellation Policy</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">To cancel your subscription, you must send an email request to billing@followfuse.com at least 24 hours prior to your billing cycle or trial ending to avoid being charged.</li>
            <li className="mb-2">Failure to cancel within this timeframe will result in automatic renewal, and charges will not be refunded.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Account & Security</h2>
          <p className="text-gray-700 mb-8">
            At FollowFuse, we take security and privacy seriously. Our system is designed to operate without ever requiring or storing your Instagram password. All interactions, including follows, unfollows, and likes, are fully automated, meaning no human ever accesses your account directly.
          </p>
          <p className="text-gray-700 mb-8">
            You agree to provide accurate account details within Instagram itself to ensure the effectiveness of our services. Our automation tools interact securely with Instagram's platform without compromising your account credentials.
          </p>
          <p className="text-gray-700 mb-8">
            While we implement advanced security measures to protect your engagement activities, FollowFuse cannot be held responsible for any actions taken by Instagram's internal security systems, including temporary restrictions or changes to engagement algorithms. By using our services, you acknowledge and accept these risks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">FollowFuse and its affiliates, employees, or partners shall not be held liable for:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</li>
            <li className="mb-2">Any actions taken by Instagram, including bans, suspensions, or content removals.</li>
            <li className="mb-2">Any loss of followers, engagement, or reputation due to changes in Instagram's algorithm or other external factors.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Indemnification</h2>
          <p className="text-gray-700 mb-8">
            You agree to indemnify and hold FollowFuse harmless from any claims, damages, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Amendments to Terms</h2>
          <p className="text-gray-700 mb-8">
            FollowFuse reserves the right to modify these Terms of Service at any time. Any updates will be posted on our website, and it is your responsibility to review these terms periodically. Continued use of our services constitutes acceptance of any modifications.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For general inquiries, please contact us at{' '}
            <a href="mailto:contact@followfuse.com" className="text-blue-600 hover:underline">
              contact@followfuse.com
            </a>
          </p>
          <p className="text-gray-700 mb-8">
            For billing or cancellation requests, reach out to{' '}
            <a href="mailto:billing@followfuse.com" className="text-blue-600 hover:underline">
              billing@followfuse.com
            </a>
          </p>

          <p className="text-gray-700 mt-12 p-6 bg-gray-50 rounded-xl">
            By using FollowFuse's services, you acknowledge that you have read, understood, and agreed to these Terms of Service.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService; 