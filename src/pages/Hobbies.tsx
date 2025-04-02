import { motion } from 'framer-motion';
import { Camera, Film, ShoppingBasket as Basketball, Tv } from 'lucide-react';

export const Hobbies = ({ isDark }: { isDark: boolean }) => {
  const hobbies = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Passionate about capturing moments and telling stories through images. Runner-up in NYKS Photography Competition.',
      achievements: ['Led Photography Team for IITM\'s Annual Fest', '3rd place in Tasveer Competition']
    },
    {
      icon: Film,
      title: 'Film Making',
      description: 'Creating visual stories and narratives through the lens.',
      achievements: ['1st position in Film Making competition for 3 consecutive years']
    },
    {
      icon: Basketball,
      title: 'Basketball',
      description: 'Playing basketball for fitness and team building.',
      achievements: ['Regular player in college tournaments']
    },
    {
      icon: Tv,
      title: 'Movies & TV Shows',
      description: 'Enthusiast of sci-fi movies and quality television content.',
      interests: ['Science Fiction', 'Drama Series', 'Documentary Films']
    }
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
          Hobbies & Interests
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              } rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <hobby.icon size={24} className="text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">{hobby.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{hobby.description}</p>
              {hobby.achievements && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-400">Achievements</h4>
                  <ul className="list-disc list-inside text-gray-400">
                    {hobby.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {hobby.interests && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-400">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {hobby.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-purple-500 bg-opacity-20 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};