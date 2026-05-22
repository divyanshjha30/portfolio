import { motion } from "framer-motion";
import { Camera, Film, Award } from "lucide-react";

export const Hobbies = () => {
  return (
    <section id="hobbies" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Beyond the Code</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-16">
          Hobbies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Film Making */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(236,72,153,0.08) 0%, transparent 65%)",
              }}
            />

            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: "rgba(236,72,153,0.1)",
                border: "1px solid rgba(236,72,153,0.2)",
                color: "#ec4899",
              }}
            >
              <Film size={28} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Film Making</h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-1)" }}
            >
              Storytelling through cinema — scripting, directing, and editing
              short films that blend narrative depth with visual craft. Three
              consecutive years of competition wins reflect a disciplined
              creative process behind the camera.
            </p>

            <div
              className="flex items-center gap-2.5 text-sm font-mono"
              style={{ color: "#ec4899" }}
            >
              <Award size={14} />
              <span>3× First Place Winner</span>
            </div>
          </motion.div>

          {/* Photography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-10 relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 65%)",
              }}
            />

            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.18)",
                color: "#00d4ff",
              }}
            >
              <Camera size={28} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Photography</h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-1)" }}
            >
              Capturing moments and unconventional perspectives through the
              lens. Competed at the national level — finding the extraordinary
              in everyday scenes and translating observation into images that
              hold meaning.
            </p>

            <div
              className="flex items-center gap-2.5 text-sm font-mono"
              style={{ color: "#00d4ff" }}
            >
              <Award size={14} />
              <span>NYKS National Photography Runner-up</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
