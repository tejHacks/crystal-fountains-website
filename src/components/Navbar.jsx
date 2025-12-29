import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-xl font-bold text-blue-900">Crystal Fountains</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="#about" className="hover:text-blue-900 transition">
            About
          </a>
          <a href="#products" className="hover:text-blue-900 transition">
            Products
          </a>
          <a href="#location" className="hover:text-blue-900 transition">
            Location
          </a>
          <a href="#contact" className="hover:text-blue-900 transition">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:07032303765"
            className="p-2 rounded-lg border border-blue-900 text-blue-900 hover:bg-blue-50 transition"
          >
            <Phone size={18} />
          </a>

          <a
            href="https://wa.me/2348032796523"
            target="_blank"
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 text-gray-700">
          <a href="#about" className="block">
            About
          </a>
          <a href="#products" className="block">
            Products
          </a>
          <a href="#location" className="block">
            Location
          </a>
          <a href="#contact" className="block">
            Contact
          </a>

          <a
            href="https://wa.me/2348032796523"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-blue-900 text-white py-3 rounded-lg"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href="tel:07032303765"
            className="flex items-center justify-center gap-2 bg-blue-900 text-white py-3 rounded-lg"
          >
            <Phone size={18} />
            Call Us Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
