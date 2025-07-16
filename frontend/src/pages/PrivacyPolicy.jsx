import Navbar from "../components/Navbar";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-amber-50">
    <Navbar />
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-dancing text-amber-900 mb-4">Privacy Policy</h2>
      <p className="text-amber-800 mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information on Shubh Vivah.</p>
      <ul className="list-disc pl-6 text-amber-800 mb-4">
        <li>We collect only necessary personal information for matchmaking purposes.</li>
        <li>Your data is stored securely and is not shared with third parties without your consent.</li>
        <li>You can update or delete your information at any time.</li>
        <li>We use cookies to enhance your experience on our platform.</li>
      </ul>
      <p className="text-amber-800">For more details, please contact us at <a href="mailto:support@shubhvivah.com" className="text-amber-700 underline">support@shubhvivah.com</a>.</p>
    </div>
  </div>
);

export default PrivacyPolicy; 