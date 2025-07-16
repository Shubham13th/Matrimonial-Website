import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install with `npm i lucide-react`

// Simulate authentication state (replace with real auth logic as needed)
const isLoggedIn = false; // Set to true to simulate logged-in state

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Main navigation links (add all static pages here)
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Search", to: "/search" },
    { label: "Matches", to: "/matches" },
    { label: "Dashboard", to: "/dashboard", auth: true },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ];

  return (
    <nav className="bg-amber-300 shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-dancing text-amber-900 hover:text-amber-950 transition duration-200"
        >
          Shubh Vivah
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => {
            if (item.auth && !isLoggedIn) return null;
            return (
              <Link
                key={item.label}
                to={item.to}
                className="relative text-amber-800 font-medium hover:text-amber-950 transition duration-200"
              >
                <span className="hover-underline">{item.label}</span>
              </Link>
            );
          })}
          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="ml-2 bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Login</Link>
              <Link to="/register" className="ml-2 bg-white border border-amber-700 text-amber-900 hover:bg-amber-100 font-semibold py-2 px-4 rounded-lg transition duration-200">Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="ml-2 bg-white border border-amber-700 text-amber-900 hover:bg-amber-100 font-semibold py-2 px-4 rounded-lg transition duration-200">My Profile</Link>
              <button className="ml-2 bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Logout</button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          {navItems.map((item) => {
            if (item.auth && !isLoggedIn) return null;
            return (
              <Link
                key={item.label}
                to={item.to}
                className="block text-amber-800 font-medium hover:text-amber-950 transition duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="w-full block bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link to="/register" className="w-full block bg-white border border-amber-700 text-amber-900 hover:bg-amber-100 font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={() => setMobileMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="w-full block bg-white border border-amber-700 text-amber-900 hover:bg-amber-100 font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
              <button className="w-full block bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-2">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
