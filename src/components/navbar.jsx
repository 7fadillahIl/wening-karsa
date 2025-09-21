import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Wening Karsa" className="w-10 h-10" />
        <span className="font-serifHeading text-wk-green text-lg">
          WENING KARSA
        </span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-6 text-sm">
        <Link
          to="about"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer hover:underline"
        >
          Tentang
        </Link>
        <Link
          to="programs"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer hover:underline"
        >
          Program
        </Link>
        <Link
          to="team"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer hover:underline"
        >
          Tim Kami
        </Link>
        <Link
          to="clients"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer hover:underline"
        >
          Klien Kami
        </Link>
        <Link
          to="testimoni"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer hover:underline"
        >
          Testimoni
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer hover:underline"
        >
          Kontak
        </Link>
      </div>

      {/* Burger Menu Icon (Mobile) */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </div>

      {/* Slide-in Menu (Mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-wk-green text-white p-6 flex flex-col gap-6 shadow-xl z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="self-end text-2xl"
            >
              <FaTimes />
            </button>

            {/* Menu Links */}
            <Link
              to="about"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-lg cursor-pointer"
            >
              Tentang
            </Link>
            <Link
              to="programs"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-lg cursor-pointer"
            >
              Program
            </Link>
            <Link
              to="team"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-lg cursor-pointer"
            >
              Tim Kami
            </Link>
            <Link
              to="clients"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-lg cursor-pointer"
            >
              Klien Kami
            </Link>
            <Link
              to="testimoni"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-lg cursor-pointer"
            >
              Testimoni
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-lg cursor-pointer"
            >
              Kontak
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
