import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import heartImg from "@/assets/heart-hd.png";
import ditlImg from "@/assets/DITL-Website.png";
import shrutiAIImg from "@/assets/Shruti-AI.png";
import portfolioImg from "@/assets/this-portfolio.png";
import firstYearImg from "@/assets/First-Year.png";
import dadWebsiteImg from "@/assets/Dad-Website.png";

const projects = [
  {
    title: "Day in the Life Simulator",
    image: ditlImg,
    desc: "An interactive React experience where users live a day as Shruti — making real choices that mirror her RBC co-op.",
    tech: ["React", "Framer Motion", "CSS"],
    url: "https://shruti-dayinmylife.netlify.app/",
    color: "from-primary/20 to-lavender/20",
  },
  {
    title: "Shruti AI",
    image: shrutiAIImg,
    desc: "A personal AI chatbot that sounds, thinks, and responds like Shruti. Features dynamic memoji reactions.",
    tech: ["HTML", "CSS", "JavaScript", "Anthropic API"],
    url: "https://shruti-ai-nine.vercel.app/",
    color: "from-lavender/20 to-peach/20",
  },
  {
    title: "This Portfolio",
    image: portfolioImg,
    desc: "Built to feel like an interactive world rather than a resume page. My digital identity.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    url: "#",
    color: "from-peach/20 to-primary/20",
  },
  {
    title: "First Year Portfolio",
    image: firstYearImg,
    desc: "My very first portfolio website. HTML, CSS, and JavaScript from scratch. Where it all started.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://shrutichaturvedi2707.github.io/portfolio.github.io/",
    color: "from-soft-pink/20 to-lavender/20",
  },
  {
    title: "Dad's Musician Website",
    image: dadWebsiteImg,
    desc: "Built for her father, a classical Indian musician. Cultural pride meets code.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://deveshchaturvedii.github.io/portfolio/",
    color: "from-lavender/20 to-primary/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-peach/8 blur-[120px]" />
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
              THINGS I'VE
              <br />
              <span className="text-gradient">BUILT</span>
            </h2>
          </div>
          <motion.img
            src={heartImg}
            alt=""
            className="w-20 h-20 md:w-24 md:h-24 object-contain hidden md:block flex-shrink-0"
            style={{ filter: "drop-shadow(0 15px 30px rgba(200, 100, 180, 0.2))" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        {/* Horizontal scrollable carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target={project.url === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
              className="snap-center flex-shrink-0 w-[320px] md:w-[380px]"
            >
              <motion.div
                animate={{
                  scale: hoveredIdx === i ? 1.05 : hoveredIdx !== null ? 0.95 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="card-dashed corner-bottom-left corner-bottom-right p-8 h-full hover:bg-muted/20 transition-all group"
              >
                {/* Gradient header */}
                <div className="w-full h-32 rounded-lg overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground/30 group-hover:text-primary transition-colors mt-1 flex-shrink-0"
                  />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
