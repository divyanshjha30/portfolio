import { motion } from "framer-motion";

export const Projects = ({ isDark }: { isDark: boolean }) => {
  const projects = [
    {
      name: "Sustainability Dashboard",
      description:
        "Developed a cloud-based dashboard using SAP UI5, Cloud Foundry, and SAP BTP for tracking sustainability metrics.",
      tech: ["SAP UI5", "Cloud Foundry", "SAP BTP"],
      type: "Professional",
    },
    {
      name: "i-ScOper 3.0 Wizard",
      description:
        "Built a UI wizard for scope management and energy efficiency tracking.",
      tech: ["SAP UI5", "API Integration"],
      type: "Professional",
    },
    {
      name: "TicTacToe Game",
      description: "Interactive TicTacToe game built with JavaScript",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/divyanshjha30/tictactoe-game",
      type: "Personal",
    },
    {
      name: "Box Office App",
      description: "Movie information and box office tracking application",
      tech: ["JavaScript", "React", "API Integration"],
      github: "https://github.com/divyanshjha30/box-office-app",
      type: "Personal",
    },
    {
      name: "Enord Website",
      description: "Website for AI-driven drone startup",
      tech: ["JavaScript", "React"],
      github: "https://github.com/divyanshjha30/enord-website",
      type: "Personal",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24"
    >
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${
                isDark ? "bg-gray-800" : "bg-gray-100"
              } rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    project.type === "Professional"
                      ? "bg-purple-500 bg-opacity-20 text-purple-300"
                      : "bg-blue-500 bg-opacity-20 text-blue-300"
                  }`}
                >
                  {project.type}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-500 bg-opacity-20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};
