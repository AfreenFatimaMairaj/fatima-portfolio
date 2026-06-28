import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiMoon,
  HiSun,
} from "react-icons/hi";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            Afreen Fatima<span className="text-gray-900 dark:text-white">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                >
                  {link.title}
                </a>
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">

            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-700 dark:text-yellow-400 hover:scale-110 transition"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Resume
            </a>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-gray-700 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">

          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                >
                  {link.title}
                </a>
              </li>
            ))}

            <button
              onClick={toggleTheme}
              className="text-3xl text-gray-700 dark:text-yellow-400"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
<a
  href="/resume/Afreen_Fatima_MERN_Resume.pdf"
  download
  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Download Resume
</a>

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;