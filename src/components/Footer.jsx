 const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Your Name</span>.  
          All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yourname@example.com"
            className="hover:text-white transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
