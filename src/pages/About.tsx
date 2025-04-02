import { motion } from "framer-motion";

export const About = ({ isDark }: { isDark: boolean }) => {
  const skills = [
    {
      category: "SAP Technologies",
      items: ["SAP UI5", "SAP Fiori", "SAP HANA", "SAP BTP"],
    },
    {
      category: "Programming",
      items: ["JavaScript", "Python", "React", "JAVA", "Git & GitHub"],
    },
    {
      category: "Tools",
      items: [
        "Cloud Foundry",
        "Postman",
        "Business Application Studio",
        "SAP BTP Cockpit",
      ],
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
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-lg ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          } mb-12`}
        >
          <p className="text-lg mb-4">
            I'm a software engineer with a passion for creating impactful
            solutions. Currently working as a Scholar@SAP in Bangalore while
            pursuing my M.Tech in Software Engineering from BITS Pilani.
          </p>
          <p className="text-lg">
            My journey in technology has been marked by continuous learning and
            practical application, from developing cloud-based applications to
            integrating complex backend systems.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold mb-6"
        >
          Skills & Expertise
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className={`p-6 rounded-lg ${
                isDark
                  ? "bg-gray-800 bg-opacity-70 backdrop-blur-md"
                  : "bg-gray-100 bg-opacity-70 backdrop-blur-md"
              }`}
            >
              <h4 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h4>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
};
