import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import thinkingImg from "@/assets/thinking-hd.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "4.0", label: "GPA" },
    { value: "3", label: "Co-ops" },
    { value: "7+", label: "Awards" },
    { value: "5+", label: "Leadership Roles" },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-lavender/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            {/* Big thinking memoji */}
            <motion.img
              src={thinkingImg}
              alt="Shruti thinking"
              className="w-48 h-48 md:w-64 md:h-64 object-contain flex-shrink-0"
              style={{ filter: "drop-shadow(0 30px 60px rgba(200, 100, 180, 0.2))" }}
              initial={{ opacity: 0, scale: 0.8, x: -40 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase tracking-tight mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ABOUT <span className="text-gradient">ME</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
                Final-year CS student at Dalhousie University. I sit at the intersection of
                technology, people, and strategy — equally comfortable writing code, running a
                marketing campaign, mentoring a first-year student, or presenting to a senior
                business partner. My superpower? Making complex systems feel simple and making
                people feel seen. 💖
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="card-dashed corner-bottom-left corner-bottom-right p-8 text-center group hover:bg-muted/20 transition-colors"
              >
                <p
                  className="text-4xl md:text-5xl font-bold text-gradient"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-muted-foreground mt-3 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
