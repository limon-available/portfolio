import profileImg from "../assets/river.jpg";
 import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
         <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-between items-center 
        text-center md:text-left bg-gray-100 px-10 pt-24 relative"
      >
        {/* Left Side: Text */}
        <div className="flex-1 ml-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Hi, I’m <span className="text-blue-700">Limon</span>
          </h1>

          {/* 🌀 Typewriter Effect */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              1500,
              "UI/UX Enthusiast 🎨",
              1500,
              "MERN Stack Developer ⚛️",
              1500,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-2xl text-gray-700 font-medium mb-6"
          />

          <p className="max-w-xl text-gray-600 leading-relaxed">
            I design and build elegant, high-performance websites using{" "}
            <span className="font-semibold text-blue-700">React</span> and{" "}
            <span className="font-semibold text-blue-700">TailwindCSS</span>.  
            Passionate about turning ideas into stunning, interactive digital
            experiences.
          </p>
<div className="flex gap-4 mt-8 justify-center md:justify-start">
  <a
    href="/projects"
    className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
  >
    View My Work
  </a>
  <a
    href="/contact"
    className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
  >
    Contact Me
  </a>
</div>

        </div>

        {/* Right Side: Clean Image with Black Border */}
      
<div className="flex-1 flex justify-end mt-10 md:mt-0 mr-80">
  <img
    src={profileImg}
    alt="Profile"
    className="w-72 h-72 rounded-full object-cover border-4 border-black"
  />
</div>

        {/* Subtle Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-20 left-1/2 -translate-x-1/2"></div>
          <div className="absolute w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-20 right-1/3"></div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0a0f1c] text-gray-300 py-6 mt-24 text-center border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">Limon</span>. All rights reserved.
        </p>

      </footer>
    </>
  );
};

export default Home;
