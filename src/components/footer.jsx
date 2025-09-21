import { useState } from "react";
import logo from "/assets/Logo Putih.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toggleTooltip = (name) => {
    setActiveTooltip(activeTooltip === name ? null : name);
  };

  return (
    <footer className="bg-wk-green text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 relative">
        {/* Logo & Nama */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-serifHeading">Wening Karsa</span>
        </div>

        {/* Social Icons with Tooltip */}
        <div className="flex gap-6 text-2xl">
          {/* Email */}
          <div
            className="relative group cursor-pointer"
            onClick={() => toggleTooltip("email")}
          >
            <a
              href="mailto:info@weningkarsa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EA4335] transition"
            >
              <MdEmail />
            </a>
          </div>

          {/* WhatsApp */}
          <div
            className="relative group cursor-pointer"
            onClick={() => toggleTooltip("wa")}
          >
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Instagram */}
          <div
            className="relative group cursor-pointer"
            onClick={() => toggleTooltip("ig")}
          >
            <a
              href="https://instagram.com/weningkarsa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Wening Karsa
        </p>
      </div>
    </footer>
  );
}
