import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import laptopImg from "@/assets/laptop-hd.png";

const roles = [
  {
    title: "SOFTWARE DEVELOPMENT",
    subtitle: "Building Real Products",
    desc: "From React apps to full-stack systems at RBC — writing code that ships, with heart emojis in my commit messages. 💖",
    skills: ["React", "TypeScript", "Java", "Python", "Git"],
  },
  {
    title: "SYSTEMS & ANALYSIS",
    subtitle: "Bridging Tech & Business",
    desc: "Making complex systems make sense. Documentation, requirements gathering, and translating between worlds.",
    skills: ["Technical Writing", "System Design", "Agile", "Requirements"],
  },
  {
    title: "COMMUNITY & LEADERSHIP",
    subtitle: "Building People, Not Just Products",
    desc: "VP of CS Society, Student Leader, CS Tutor, Residence Assistant — I build communities that thrive.",
    skills: ["Public Speaking", "Mentoring", "Marketing", "Event Planning"],
  },
];

const WhatIDoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const memojiX = useTransform(scrollYProgress, [0, 0.5], [-80, 0]);
  const memojiOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const memojiScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section id="whatido" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:pl-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Laptop Memoji — BIG, slides in on scroll */}
          <motion.div
            className="lg:flex-shrink-0 relative"
            style={{ x: memojiX, opacity: memojiOpacity, scale: memojiScale }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary/15 blur-[60px]" />
            <motion.img
              src={laptopImg}
              alt="Shruti working on laptop"
              className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] object-contain"
              style={{ filter: "drop-shadow(0 30px 60px rgba(200, 100, 180, 0.2))" }}
            />
          </motion.div>

          {/* Content — expandable cards like Akash's site */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase tracking-tight"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                WHAT
                <br />
                I <span className="text-gradient">DO</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {roles.map((role, i) => {
                const isExpanded = expandedIdx === i;
                return (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 * i }}
                    onClick={() => setExpandedIdx(isExpanded ? null : i)}
                    className="card-dashed corner-bottom-left corner-bottom-right p-6 cursor-pointer hover:bg-muted/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3
                          className="text-lg md:text-xl font-bold tracking-wide"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {role.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{role.subtitle}</p>
                      </div>
                      <motion.div
                        className="text-muted-foreground/50"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{role.desc}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {role.skills.map((s) => (
                              <span
                                key={s}
                                className="text-[11px] px-3 py-1 rounded-full border border-border text-muted-foreground"
                                style={{ fontFamily: "var(--font-mono)" }}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
