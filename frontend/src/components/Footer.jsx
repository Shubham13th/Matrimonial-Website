import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-amber-300 text-amber-900 py-8 mt-12 border-t border-amber-200">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Logo & Copyright */}
      <div className="flex flex-col items-center md:items-start">
        <Link to="/" className="text-2xl font-dancing mb-1 hover:text-amber-950 transition">Shubh Vivah</Link>
        <span className="text-sm">&copy; {new Date().getFullYear()} Shubh Vivah. All rights reserved.</span>
      </div>
      {/* Footer Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
      </div>
      {/* Social Media (placeholders) */}
      <div className="flex gap-4">
        <a href="#" className="hover:text-amber-700" aria-label="Facebook"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg></a>
        <a href="#" className="hover:text-amber-700" aria-label="Twitter"><svg width="24" height="24" fill="currentColor" className="inline"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg></a>
        <a href="#" className="hover:text-amber-700" aria-label="Instagram"><svg width="24" height="24" fill="currentColor" className="inline"><circle cx="12" cy="12" r="3.2"/><path d="M17.5 3h-11A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3zm-5.5 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm6-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
      </div>
    </div>
  </footer>
);

export default Footer; 