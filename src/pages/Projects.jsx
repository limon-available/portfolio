 import { useState } from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built using React and TailwindCSS.",
      link: "#",
      color: "from-blue-500/30 to-indigo-600/30",
    },
    {
      title: "E-commerce App",
      desc: "A simple shopping platform with cart and product pages.",
      link: "https://frontend-mern-multi-vendor-ecommerc.vercel.app/",
      color: "from-green-400/30 to-emerald-600/30",
    },
    {
      title: "Weather App",
      desc: "A weather forecasting app using OpenWeather API.",
      link: "#",
      color: "from-purple-500/30 to-pink-600/30",
    },
  ];

  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [ratings, setRatings] = useState({});
  const [userRating, setUserRating] = useState({});

  const handleCommentChange = (index, value) => {
    setNewComment({ ...newComment, [index]: value });
  };

  const handleAddComment = (index) => {
    if (!newComment[index]) return;
    const updated = { ...comments };
    if (!updated[index]) updated[index] = [];
    updated[index].push(newComment[index]);
    setComments(updated);
    setNewComment({ ...newComment, [index]: "" });
  };

  const handleRating = (index, value) => {
    const updatedRatings = { ...ratings };
    if (!updatedRatings[index]) updatedRatings[index] = [];
    updatedRatings[index].push(value);
    setRatings(updatedRatings);
    setUserRating({ ...userRating, [index]: value });
  };

  const getAverageRating = (index) => {
    const projectRatings = ratings[index];
    if (!projectRatings || projectRatings.length === 0) return 0;
    const sum = projectRatings.reduce((a, b) => a + b, 0);
    return (sum / projectRatings.length).toFixed(1);
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-16 px-6 text-center">
      {/* 🌈 Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#f1f5f9] to-[#e0f7fa]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),transparent_70%)]"></div>

      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-12 relative z-10">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {projectList.map((p, index) => (
          <div key={index} className="space-y-6">
            {/* 🌟 Project Info Card */}
            <div
              className={`bg-gradient-to-br ${p.color} backdrop-blur-lg border border-white/30 shadow-xl text-gray-900 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                View Project
              </a>
            </div>

            {/* 💬 Rating + Comment Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-gray-300 shadow-lg rounded-2xl p-6 text-left text-gray-900">
              {/* ⭐ Rating Section */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-xl">⭐ Rate this Project</h4>
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(index, star)}
                      className={`text-2xl transition ${
                        userRating[index] >= star
                          ? "text-yellow-500"
                          : "text-gray-400 hover:text-yellow-400"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Average Rating:{" "}
                  <span className="font-semibold text-yellow-500">
                    {getAverageRating(index)} / 5
                  </span>
                </p>
              </div>

              {/* 💬 Comment Section */}
              <div>
                <h4 className="font-semibold mb-3 text-xl">💬 Comments</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto mb-3">
                  {comments[index]?.length ? (
                    comments[index].map((c, i) => (
                      <p
                        key={i}
                        className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-800"
                      >
                        {c}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No comments yet.</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment[index] || ""}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm text-gray-800 placeholder-gray-500 outline-none"
                  />
                  <button
                    onClick={() => handleAddComment(index)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 rounded-lg transition-all duration-300"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
