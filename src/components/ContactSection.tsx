import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail, Instagram, Youtube } from "lucide-react";
import heartImg from "@/assets/heart-hd.png";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shrutichaturvedi27/", color: "hover:border-blue-500 hover:text-blue-400" },
  { icon: Github, label: "GitHub", href: "https://github.com/shrutichaturvedi2707", color: "hover:border-foreground hover:text-foreground" },
  { icon: Mail, label: "Email", href: "mailto:shrutichaturvedi@dal.ca", color: "hover:border-primary hover:text-primary" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/shruttichaturvedi", color: "hover:border-pink-500 hover:text-pink-400" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@shrutichaturvedi27", color: "hover:border-red-500 hover:text-red-400" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={heartImg}
            alt="Shruti heart memoji"
            className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-8"
            style={{ filter: "drop-shadow(0 30px 60px rgba(200, 100, 180, 0.25))" }}
            animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LET'S <span className="text-gradient">CONNECT</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12 text-base md:text-lg leading-relaxed">
            I'd love to hear from you! Whether it's about tech, leadership,
            or just life in Canada 🇨🇦
          </p>

          <div className="flex justify-center gap-5 mb-16">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.2, y: -8 }}
                className={`w-16 h-16 rounded-2xl border border-border flex items-center justify-center text-muted-foreground transition-all ${s.color}`}
              >
                <s.icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-muted-foreground/60 mb-2">
              "I build things that work, leads communities that thrive, and makes complex systems feel like they were always supposed to be simple."
            </p>
            <p className="text-xs text-muted-foreground/40 mt-6">
              Designed & built with 💖 by Shruti Chaturvedi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
