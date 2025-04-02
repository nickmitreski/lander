import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cancellation & Refund Policy - FollowFuse</title>
        <meta name="description" content="FollowFuse Cancellation and Refund Policy - Learn about our subscription cancellation and refund terms" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cancellation and Refund Policy</h1>
        <h2 className="text-xl text-gray-700 mb-4">FollowFuse Instagram Growth Agency</h2>
        <p className="text-gray-600 mb-8">Last Updated: April 2, 2024</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            At FollowFuseApp, we are committed to providing high-quality services and ensuring our clients are satisfied. If any issues arise, including incorrect charges, we are here to help. Please review our Cancellation and Refund Policy below for details on how cancellations and corrections are handled:
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Cancellation Policy</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">How to Cancel Your Subscription</h3>
          <p className="text-gray-700 mb-8">
            To cancel your subscription, please contact our support team at{' '}
            <a href="mailto:contact@followfuseapp.com" className="text-blue-600 hover:underline">
              contact@followfuseapp.com
            </a>{' '}
            at least 24 hours prior to the end of the trial period or subscription term.
          </p>

          <p className="text-gray-700 mb-8">
            Cancellations must be received prior to the renewal or billing date. Once your cancellation request is processed, no further charges will be applied to your account after the current billing cycle or trial period ends.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">No Future Charges After Cancellation</h3>
          <p className="text-gray-700 mb-8">
            After canceling, no future charges will be made to your account after the current billing cycle or trial period ends. You will continue to have access to the services until the end of your current billing period.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Refund Policy</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">No Refunds After Payment is Processed</h3>
          <p className="text-gray-700 mb-8">
            Once payment has been processed, all charges are non-refundable. We do not issue refunds after payment has been successfully processed. By agreeing to use our services, you acknowledge and accept this policy.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Free Trial Period</h3>
          <p className="text-gray-700 mb-8">
            If you cancel your subscription during your free trial period, no charges will be applied, and you will not be billed. Once the free trial period has ended and payment is processed, our non-refundable policy applies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Incorrect Charges</h2>
          <p className="text-gray-700 mb-8">
            If you believe you have been incorrectly charged, please bring it to our attention as soon as possible by contacting our support team at{' '}
            <a href="mailto:contact@followfuseapp.com" className="text-blue-600 hover:underline">
              contact@followfuseapp.com
            </a>.
          </p>
          <p className="text-gray-700 mb-8">
            If an error is identified, we will rectify the charge promptly and make any necessary corrections. We are committed to resolving any billing issues quickly and fairly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. How to Cancel or Modify Your Subscription</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Contacting Our Support Team</h3>
          <p className="text-gray-700 mb-8">
            To cancel or modify your subscription, please contact our support team at{' '}
            <a href="mailto:contact@followfuseapp.com" className="text-blue-600 hover:underline">
              contact@followfuseapp.com
            </a>, at least 24 hours prior to the end of your trial or subscription term.
          </p>
          <p className="text-gray-700 mb-8">
            We will promptly assist you in processing your cancellation request.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Changes to This Policy</h2>
          <p className="text-gray-700 mb-8">
            FollowFuseApp reserves the right to update or change this Cancellation and Refund Policy at any time. Any updates will be posted on this page, and the "Last Updated" date will be revised. We encourage you to review this policy periodically to stay informed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Contact Information</h2>
          <p className="text-gray-700 mb-8">
            If you have any questions about this policy or need assistance with cancellations, please contact us at{' '}
            <a href="mailto:contact@followfuseapp.com" className="text-blue-600 hover:underline">
              contact@followfuseapp.com
            </a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CancellationPolicy; 