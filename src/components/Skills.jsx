import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiPostman,
  SiVite,
  SiFirebase,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-700 dark:text-white" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "Material UI", icon: <SiMui />, color: "text-blue-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-900 dark:text-white" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { name: "Vite", icon: <SiVite />, color: "text-violet-500" },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Technologies I Work With
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className={`text-5xl mb-4 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;