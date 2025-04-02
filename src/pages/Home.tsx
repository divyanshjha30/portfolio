import { motion } from "framer-motion";

export const Home = ({ isDark }: { isDark: boolean }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24"
    >
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-4 gradient-text"
        >
          Divyansh Jha
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-gray-400 mb-8"
        >
          Scholar@SAP | M.Tech Software Engineering @ BITS Pilani
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg text-gray-400 mb-12"
        >
          <p>
            A highly motivated software engineer passionate about SAP UI5, SAP
            BTP, Cloud Foundry, and frontend development. Currently working on
            impactful projects at SAP while pursuing my M.Tech in Software
            Engineering.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { title: "Experience", content: "Scholar@SAP" },
            { title: "Education", content: "BITS Pilani" },
            { title: "Location", content: "Bangalore, India" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark
                  ? "bg-gray-800 bg-opacity-30 backdrop-blur-md text-gray-200"
                  : "bg-gray-100 bg-opacity-70 backdrop-blur-md"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-all"
          >
            Explore More
          </motion.button>
        </motion.div>
      </section>
    </motion.main>
  );
};
