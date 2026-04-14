import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shrutichaturvedi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/shrutichaturvedi", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.3, x: 4 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 + i * 0.1 }}
        >
          <s.icon size={20} strokeWidth={1.5} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
