import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/profile.js";

const Footer = () => {
  return (
    <footer className="border-t border-surface-800 bg-surface-950 text-surface-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-white">{profile.name}</h3>
          <p className="mt-2 max-w-xs text-sm text-surface-400">{profile.tagline}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-surface-400">
            <FaMapMarkerAlt aria-hidden="true" /> {profile.location}
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h4 className="mb-3 font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-white">About</Link></li>
            <li><Link to="/projects" className="transition hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        {/* Social */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Connect</h4>
          <div className="flex gap-4">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <FaGithub size={22} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-blue-400">
              <FaLinkedin size={22} />
            </a>
            <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-blue-500">
              <FaFacebook size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-800 py-5 text-center text-sm text-surface-400">
        © {new Date().getFullYear()} <span className="font-semibold text-brand-400">{profile.name}</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
