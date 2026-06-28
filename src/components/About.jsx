import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            Get To Know Me
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
              I'm <span className="font-semibold">Afreen Fatima</span>, a
              passionate MERN Stack Developer who enjoys building responsive,
              secure, and scalable web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
              My expertise includes React.js, Node.js, Express.js, MongoDB,
              REST APIs, authentication using JWT, and responsive UI design
              using Tailwind CSS and Material UI.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              I love solving real-world problems, learning modern technologies,
              and creating applications with clean code and great user
              experiences.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <FaCode className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                15+
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <FaProjectDiagram className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                10+
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Projects
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <FaLaptopCode className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                MERN
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Full Stack
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <FaGraduationCap className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                BSCS
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Student
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;