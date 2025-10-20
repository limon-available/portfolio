 const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
      <p className="text-gray-600 mb-8">
        Feel free to reach out using the form below.
      </p>

      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-700"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-700"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:outline-none focus:border-blue-700"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
