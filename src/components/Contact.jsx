import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Get In Touch
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-full text-white text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-xl dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  your@email.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-full text-white text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +92 300 1234567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-full text-white text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Karachi, Pakistan
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg border dark:bg-slate-800 dark:text-white outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg border dark:bg-slate-800 dark:text-white outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg border dark:bg-slate-800 dark:text-white outline-none focus:border-blue-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border dark:bg-slate-800 dark:text-white outline-none focus:border-blue-600"
            ></textarea>

            <button
              className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;