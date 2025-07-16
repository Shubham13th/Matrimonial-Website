import Navbar from "../components/Navbar";

const Terms = () => (
  <div className="min-h-screen bg-amber-50">
    <Navbar />
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-dancing text-amber-900 mb-4">Terms & Conditions</h2>
      <p className="text-amber-800 mb-4">By using Shubh Vivah, you agree to the following terms and conditions:</p>
      <ul className="list-disc pl-6 text-amber-800 mb-4">
        <li>You must be at least 18 years old to register.</li>
        <li>All information provided must be accurate and truthful.</li>
        <li>Any misuse of the platform may result in account suspension.</li>
        <li>We reserve the right to update these terms at any time.</li>
      </ul>
      <p className="text-amber-800">For questions, contact <a href="mailto:support@shubhvivah.com" className="text-amber-700 underline">support@shubhvivah.com</a>.</p>
    </div>
  </div>
);

export default Terms; 