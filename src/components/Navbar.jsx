import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.jsx";
import { profile } from "../data/profile.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="rounded-lg p-2 text-surface-200 transition hover:bg-white/10 hover:text-white"
    >
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
    }`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-surface-900/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-surface-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand + social */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold tracking-wide text-cyan-400">
            {profile.shortName}
            <span className="text-white">.dev</span>
          </Link>
          <div className="hidden gap-3 text-surface-200 sm:flex">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <FaGithub size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-blue-400">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8 font-medium">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass} end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-lg p-2 text-white transition hover:bg-white/10"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-white/10 px-6 py-3 font-medium md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 transition ${
                    isActive ? "bg-white/10 text-cyan-400" : "text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
