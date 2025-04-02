import { motion } from "framer-motion";
import { Github, Mail, Moon, Sun, Menu } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export const Navbar = ({ isDark, toggleTheme, toggleSidebar }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDark ? "bg-black" : "bg-white"
      } bg-opacity-80 backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={toggleSidebar}
              className={`mr-4 ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Menu size={24} />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            >
              Divyansh Jha
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/divyanshjha30"
              target="_blank"
              rel="noopener noreferrer"
              className={
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:divyansh.jha@sap.com"
              className={
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }
            >
              <Mail size={20} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={toggleTheme}
              className={
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
