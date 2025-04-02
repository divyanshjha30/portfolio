import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Hobbies } from './pages/Hobbies';
import { Legal } from './pages/Legal';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <>
        {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}
        <Background isDark={isDark} />
        <Navbar 
          isDark={isDark} 
          toggleTheme={() => setIsDark(!isDark)} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          isDark={isDark}
        />
        
        <div className={`min-h-screen ${isDark ? 'text-white' : 'text-gray-900'} ${isDark ? 'bg-black bg-opacity-30' : 'bg-white'}`}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home isDark={isDark} />} />
              <Route path="/about" element={<About isDark={isDark} />} />
              <Route path="/projects" element={<Projects isDark={isDark} />} />
              <Route path="/hobbies" element={<Hobbies isDark={isDark} />} />
              <Route path="/legal" element={<Legal isDark={isDark} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </>
    </Router>
  );
}

export default App;