 import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* ==== Left Side: Brand + Social Icons ==== */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
            MyPortfolio
          </h1>

          {/* Social Media Icons */}
          <div className="flex gap-3 ml-2 text-gray-300">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://github.com/limon-available"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/nazmul-hossen-limon-limon-24b656205/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* ==== Right Side: Navigation Links ==== */}
        <ul className="flex gap-8 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
