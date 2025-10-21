 const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Your Name</span>.  
          All rights reserved.
        </p>

    
      </div>
    </footer>
  );
};

export default Footer;
