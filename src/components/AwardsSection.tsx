import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import starstruckImg from "@/assets/starstruck-hd.png";

const awards = [
  { emoji: "🏆", title: "Ada Byron Award", org: "Faculty of Computer Science, Dalhousie", year: "2026" },
  { emoji: "🏆", title: "Leacross Leadership Award for Women in Technology", org: "FCS, Dalhousie", year: "2026" },
  { emoji: "🏆", title: "High Performance Leadership Team Impact Award", org: "Dalhousie", year: "2026" },
  { emoji: "🏆", title: "Faculty of CS Leadership Award", org: "Dalhousie", year: "2025" },
  { emoji: "🏆", title: "Residence Life Impact Award", org: "Dalhousie", year: "2025" },
  { emoji: "🚀", title: "Future Tech Leaders Award", org: "", year: "2022" },
  { emoji: "🎓", title: "Dean's List", org: "Dalhousie University", year: "Almost All Semesters" },
  { emoji: "🎓", title: "Sexton Scholar", org: "Dalhousie University", year: "Almost All Semesters" },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
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
              AWARDS &
              <br />
              <span className="text-gradient">RECOGNITION</span>
            </h2>
          </div>
          <motion.img
            src={starstruckImg}
            alt=""
            className="w-24 h-24 md:w-32 md:h-32 object-contain hidden md:block flex-shrink-0"
            style={{ filter: "drop-shadow(0 15px 30px rgba(200, 100, 180, 0.2))" }}
            animate={{ scale: [1, 1.08, 1], rotate: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
              className="card-dashed corner-bottom-left corner-bottom-right p-6 hover:bg-muted/20 transition-all cursor-default group"
            >
              <motion.span
                className="text-4xl block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.3 }}
              >
                {award.emoji}
              </motion.span>
              <h3 className="text-sm font-bold mt-4 group-hover:text-primary transition-colors">
                {award.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2">{award.org}</p>
              {award.year && (
                <p
                  className="text-xs text-primary mt-3 font-medium"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {award.year}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
