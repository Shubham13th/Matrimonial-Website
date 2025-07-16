import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I register on Shubh Vivah?",
    answer: "Click the Register button in the navigation bar or on the homepage, fill out the form, and submit your details."
  },
  {
    question: "How can I edit my profile?",
    answer: "Go to your Dashboard and click the 'Edit Profile' button to update your information and upload a new profile picture."
  },
  {
    question: "How do I search for matches?",
    answer: "Use the Search page to filter profiles by age, religion, location, and language."
  },
  {
    question: "I forgot my password. What should I do?",
    answer: "Go to the Login page and click 'Forgot Password?' to reset your password."
  },
  {
    question: "How do I contact support?",
    answer: "Use the Contact Us page to send us a message or email support@shubhvivah.com."
  },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-4xl font-dancing text-amber-900 mb-4 text-center">Help & Support</h2>
        <p className="text-amber-800 mb-8 text-center">Find answers to common questions below. If you need more help, feel free to <Link to='/contact' className='text-amber-700 underline hover:text-amber-900'>contact us</Link>.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-amber-900 mb-2">{faq.question}</h3>
              <p className="text-amber-800">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <span className="text-amber-800">Still need help? </span>
          <Link to="/contact" className="text-amber-700 underline hover:text-amber-900">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
