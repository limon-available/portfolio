 const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built using React and TailwindCSS.",
      link: "#",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "E-commerce App",
      desc: "A simple shopping platform with cart and product pages.",
      link: "#",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Weather App",
      desc: "A weather forecasting app using OpenWeather API.",
      link: "#",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">My Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectList.map((p, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${p.color} text-white shadow-xl rounded-xl p-8 transform hover:scale-105 transition-all duration-300`}
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-100 mb-6">{p.desc}</p>
            <a
              href={p.link}
              className="inline-block px-5 py-2 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
