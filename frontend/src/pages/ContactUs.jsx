import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-4xl font-dancing text-amber-900 mb-4">Contact Us</h2>
        <p className="text-amber-800 mb-6">Have questions or need help? Reach out to us below or email <a href="mailto:support@shubhvivah.com" className="text-amber-700 underline">support@shubhvivah.com</a>.</p>
        {submitted ? (
          <div className="text-green-700 font-semibold py-8 text-center">Thank you for contacting us! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-amber-900 mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
            </div>
            <button type="submit" className="bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-8 rounded-lg transition duration-200">Send Message</button>
          </form>
        )}
        <div className="mt-8 text-center">
          <span className="text-amber-800">Need more help? </span>
          <Link to="/help" className="text-amber-700 underline hover:text-amber-900">Visit our Help page</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 