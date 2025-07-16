import Navbar from "../components/Navbar";

const AboutUs = () => (
  <div className="min-h-screen bg-amber-50">
    <Navbar />
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-dancing text-amber-900 mb-4">About Us</h2>
      <p className="text-lg text-amber-800 mb-4">Shubh Vivah is dedicated to helping individuals find their perfect life partner with trust, tradition, and technology. Our mission is to create meaningful connections and lasting relationships through a safe and user-friendly platform.</p>
      <p className="text-amber-800 mb-2">We believe in the power of compatibility, family values, and modern matchmaking. Our team is passionate about making your matrimonial journey smooth, secure, and successful.</p>
      <p className="text-amber-800">Thank you for choosing Shubh Vivah as your trusted partner in finding happiness.</p>
    </div>
  </div>
);

export default AboutUs; 