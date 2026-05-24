import { motion } from "framer-motion";

export const Projects = ({ isDark }: { isDark: boolean }) => {
  const projects = [
    {
      name: "Royal Casino",
      description:
        "Multiplayer poker & blackjack game with real-time gameplay, chip economy, player profiles, and achievements. Built with React, Supabase, and Framer Motion.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/divyanshjha30/project",
      live: "https://royal-casino-dj.netlify.app",
      type: "Personal",
    },
    {
      name: "AI Talk",
      description:
        "CLI-powered AI assistant for chatting, code explanation, git summaries, and project scaffolding using Groq LLMs.",
      tech: ["Python", "Groq API", "CLI"],
      github: "https://github.com/divyanshjha30/aitalk",
      type: "Personal",
    },
    {
      name: "LLM Chatbot",
      description:
        "Full-stack RAG chatbot with knowledge base ingestion, vector search, and conversational AI. Includes React frontend and FastAPI backend.",
      tech: ["Python", "FastAPI", "React", "LangChain"],
      live: "https://web-chatbot-divyansh.netlify.app",
      type: "Personal",
    },
    {
      name: "Project Management Suite",
      description:
        "Full-stack project management system with task boards, team collaboration, and real-time updates.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://project-management-system-fsad.netlify.app",
      type: "Personal",
    },
    {
      name: "Sustainability Dashboard",
      description:
        "Cloud-based dashboard using SAP UI5, Cloud Foundry, and SAP BTP for tracking sustainability metrics and energy efficiency.",
      tech: ["SAP UI5", "Cloud Foundry", "SAP BTP"],
      type: "Professional",
    },
    {
      name: "i-ScOper 3.0 Wizard",
      description:
        "UI wizard for scope management and energy efficiency tracking within SAP ecosystem.",
      tech: ["SAP UI5", "API Integration"],
      type: "Professional",
    },
    {
      name: "TicTacToe Game",
      description:
        "Interactive TicTacToe game with AI opponent, score tracking, and clean animations.",
      tech: ["JavaScript", "Vite", "CSS"],
      github: "https://github.com/divyanshjha30/tictactoe-game",
      live: "https://tictactoe-divyanshjha.netlify.app",
      type: "Personal",
    },
    {
      name: "Box Office App",
      description:
        "Movie information and box office tracking application with search, ratings, and trending data.",
      tech: ["React", "API Integration", "CSS"],
      github: "https://github.com/divyanshjha30/box-office-app",
      type: "Personal",
    },
    {
      name: "Enord Website",
      description:
        "Marketing website for an AI-driven drone startup showcasing products and services.",
      tech: ["React", "JavaScript", "CSS"],
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
                isDark
                  ? "bg-gray-800 bg-opacity-30 backdrop-blur-md text-gray-200"
                  : "bg-gray-100 bg-opacity-70 backdrop-blur-md"
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
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};
