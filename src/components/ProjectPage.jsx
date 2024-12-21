import React from "react";
import { FaGithub, FaShareAlt } from "react-icons/fa";

const projects = [
  {
    image: "/images/project1.png",
    title: "MyChat99",
    description:
      "MyChat99 is a modern chat app that provides an easy-to-use interface for users to communicate with each other. It is built with the MERN stack and uses Socket.io for real-time interactions.",
    githubLink: "https://github.com/yourusername/mychat99",
    liveLink: "https://mychat99.com",
  },
  {
    image: "/images/project2.png",
    title: "Portfolio Website",
    description: "A modern portfolio to showcase personal projects and skills.",
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://portfolio.com",
  },
  {
    image: "/images/project3.png",
    title: "E-Commerce Platform",
    description:
      "A fully responsive e-commerce platform with real-time payment integration and dynamic product catalog.",
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce.com",
  },
  {
    image: "/images/project4.png",
    title: "Weather App",
    description:
      "A weather forecasting app that provides real-time weather updates using OpenWeather API.",
    githubLink: "https://github.com/yourusername/weatherapp",
    liveLink: "https://weatherapp.com",
  },
  {
    image: "/images/project5.png",
    title: "Task Manager",
    description:
      "A task management tool with features like to-do lists, reminders, and priority settings.",
    githubLink: "https://github.com/yourusername/taskmanager",
    liveLink: "https://taskmanager.com",
  },
  {
    image: "/images/project6.png",
    title: "Blogging Platform",
    description:
      "A blogging platform where users can write, edit, and publish blogs with Markdown support.",
    githubLink: "https://github.com/yourusername/bloggingplatform",
    liveLink: "https://bloggingplatform.com",
  },
];

const ProjectPage = () => {
  return (
    <div id="ProjectPage" className="min-h-screen text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-thin text-center mb-12">
          My 
          <span className="text-neutral-500 font-thin ml-2 px-5">
          Projects
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-blue-800/10 shadow-lg rounded-xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img
                  src={project.image}
                  alt={`${project.title} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Project Title */}
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

              {/* Project Description */}
              <p className="text-gray-400 flex-grow mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors"
                >
                  <FaShareAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
