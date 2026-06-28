import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// Import your profile image
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-slate-950 pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-600 text-lg font-semibold mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Afreen Fatima
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mt-4">
              MERN Stack Developer
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-xl">
              Passionate Full Stack Developer specializing in MongoDB,
              Express.js, React.js and Node.js. I enjoy building secure,
              responsive and user-friendly web applications with clean code
              and modern UI.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition"
              >
                View Projects
                <HiArrowRight />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-3 rounded-lg font-semibold transition"
              >
                <FaDownload />
                Resume
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex items-center gap-6 mt-10">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

              <img
                src={profile}
                alt="Afreen"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;