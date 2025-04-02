import { motion } from 'framer-motion';

export const Legal = ({ isDark }: { isDark: boolean }) => {
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
          Legal Information
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} mb-8`}
        >
          <h3 className="text-xl font-semibold mb-4">Copyright Notice</h3>
          <p className="text-gray-400 mb-4">
            © 2024 Divyansh Jha. All rights reserved. The content, design, and images on this website
            are protected by international copyright laws.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} mb-8`}
        >
          <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
          <p className="text-gray-400 mb-4">
            This website does not collect any personal information from its visitors.
            Any information provided through the contact form is used solely for communication purposes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          <h3 className="text-xl font-semibold mb-4">Disclaimer</h3>
          <p className="text-gray-400 mb-4">
            The information provided on this website is for general informational purposes only.
            While I strive to keep the information up to date and accurate, I make no representations
            or warranties of any kind about the completeness, accuracy, reliability, suitability,
            or availability of the information contained on the website.
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
};