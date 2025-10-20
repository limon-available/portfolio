 const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-b from-gray-100 to-gray-200 text-center px-6 py-16 relative text-gray-800">
      
      {/* Decorative background blur */}
      <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply 
        filter blur-3xl opacity-30 top-0 left-1/3 -z-10"></div>

      {/* --- About Header --- */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        About <span className="text-blue-700">Me</span>
      </h2>

      <p className="max-w-2xl text-gray-700 leading-relaxed mb-12">
        I’m a passionate <span className="text-blue-700 font-semibold">Full Stack Developer</span> 
        who enjoys transforming ideas into elegant, interactive web experiences.  
        Skilled in <span className="text-indigo-700 font-semibold">React</span> and 
        <span className="text-indigo-700 font-semibold"> TailwindCSS</span>, I love blending creativity with functionality.
      </p>

      {/* --- Skills & Education Cards --- */}
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl w-full">
        {/* Skills */}
        <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-1 
          transition border border-gray-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center justify-center gap-2">
            💡 Skills
          </h3>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>⚡ HTML5, CSS3, JavaScript (ES6+)</li>
            <li>⚛️ React.js, TailwindCSS</li>
            <li>🛠️ Node.js, Express.js</li>
            <li>📦 Git, GitHub, REST APIs</li>
            <li>🗄️ MySQL, MongoDB</li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-1 
          transition border border-gray-300">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center justify-center gap-2">
            🎓 Education
          </h3>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>🎓 Bachelor’s in Computer Science & Engineering</li>
            <li>📚 Certifications in Web Development</li>
            <li>🎨 Advanced training in React & UI/UX Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
