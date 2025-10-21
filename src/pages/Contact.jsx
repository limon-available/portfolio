 import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#eef3ff] via-[#e2e8f0] to-[#f8fafc] px-8 py-20 md:py-28 gap-14">
      
      {/* Left Section - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-700 text-lg font-semibold leading-relaxed max-w-md">
          I’d love to hear from you! <br />
          Let’s create something amazing together 💫
        </p>

        <div className="mt-6 space-y-2 text-gray-600 font-medium">
          <p>📧 limon@example.com</p>
          <p>📞 +880 1XXX-XXXXXX</p>
          <p>🌍 Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="md:w-1/2 w-full max-w-md bg-gradient-to-br from-[#1e293b] to-[#334155] border border-gray-700/40 text-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <div className="space-y-5">
          <div>
            <label className="block text-gray-200 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-medium mb-1">Message</label>
            <textarea
              rows="3"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-500 bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(6,182,212,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg transition-all duration-300"
          >
            Send Message 💌
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
