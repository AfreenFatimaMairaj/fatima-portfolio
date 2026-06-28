import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import ecommerce from "../assets/images/ecommerce.jpg";
import portfolio from "../assets/images/portfolio.png";
import chatapp from "../assets/images/chatapp.png";
import taskmanager from "../assets/images/taskmanager.jpg";

function Projects() {
  const projects = [
    {
      title: "MERN E-Commerce",
      image: ecommerce,
      description:
        "A complete MERN e-commerce website with authentication, cart, orders and admin dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "Personal portfolio built with React, Tailwind CSS and modern UI design.",
      tech: ["React", "Tailwind", "Vite"],
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      image: chatapp,
      description:
        "Real-time chat application using Socket.io and MERN Stack.",
      tech: ["React", "Node", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager",
      image: taskmanager,
      description:
        "Task management system with authentication and CRUD operations.",
      tech: ["React", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;