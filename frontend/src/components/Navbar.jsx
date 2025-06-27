import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install with `npm i lucide-react`

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Search Matches", to: "/search" },
    { label: "My Profile", to: "/profile" },
    { label: "Premium Plans", to: "/plans" },
    { label: "Success Stories", to: "/success" },
    { label: "Contact Us", to: "/contact" },
    { label: "Help", to: "/help" },
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="relative text-amber-800 font-medium hover:text-amber-950 transition duration-200"
            >
              <span className="hover-underline">{item.label}</span>
            </Link>
          ))}

          <button className="ml-2 bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Login
          </button>
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block text-amber-800 font-medium hover:text-amber-950 transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
