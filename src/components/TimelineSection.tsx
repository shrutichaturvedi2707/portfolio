import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import thumbsupImg from "@/assets/thumbsup-hd.png";

const timelineData = [
  {
    role: "Software Developer Intern",
    org: "Royal Bank of Canada",
    period: "Sep–Dec 2025",
    location: "Toronto, ON",
    desc: "Real coding, real features, real commits. Back-to-back meetings, coffee chats with senior partners, and shipping actual software.",
  },
  {
    role: "Business Analyst",
    org: "CGI Consulting",
    period: "Jan–Apr 2025",
    location: "Halifax, NS",
    desc: "Explored consulting, client-facing work, requirements gathering. A completely different world from pure tech.",
  },
  {
    role: "Technical Systems Analyst",
    org: "Royal Bank of Canada",
    period: "May–Aug 2024",
    location: "Toronto, ON",
    desc: "First major co-op. Analyzing systems, bridging technical and business teams, living my best downtown Toronto life.",
  },
  {
    role: "VP, Computer Science Society",
    org: "Dalhousie University",
    period: "Fall 2025",
    location: "Halifax, NS",
    desc: "Elected Vice President. Leading the CS community because apparently I needed one more thing on my plate.",
  },
  {
    role: "CS Tutor + Ambassador + RA",
    org: "Dalhousie University",
    period: "Sep 2024",
    location: "Halifax, NS",
    desc: "Three roles at once. CS Tutor, Student Ambassador, and Residence Assistant. Classic Shruti energy.",
  },
  {
    role: "Marketing & PR Rep",
    org: "Women in Technology Society",
    period: "2023",
    location: "Halifax, NS",
    desc: "Discovered the communications side of tech. Amplifying women in tech and building community.",
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] rounded-full bg-lavender/6 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end gap-8"
        >
          <div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase tracking-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              MY <span className="text-gradient">CAREER</span>
              <br />
              & EXPERIENCE
            </h2>
          </div>
          <motion.img
            src={thumbsupImg}
            alt=""
            className="w-20 h-20 md:w-28 md:h-28 object-contain hidden md:block flex-shrink-0"
            style={{ filter: "drop-shadow(0 15px 30px rgba(200, 100, 180, 0.2))" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        {/* Interactive timeline with visual line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-lavender/30 to-transparent" />

          <div className="space-y-0">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative pl-16 md:pl-20 py-8 group"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-6 top-10 w-4 h-4 rounded-full border-2 border-primary bg-background z-10"
                  whileHover={{ scale: 1.5, backgroundColor: "hsl(310, 60%, 65%)" }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="card-dashed corner-bottom-left corner-bottom-right p-6 hover:bg-muted/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <h3 className="font-bold text-foreground text-base md:text-lg">{item.role}</h3>
                          <p className="text-sm text-primary">{item.org}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.desc}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p
                        className="text-xs text-muted-foreground font-medium"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.period}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
