import { motion } from "framer-motion";

const ResumeTab = () => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      style={{ fontFamily: "var(--font-mono)" }}
      whileHover={{ y: -2 }}
    >
      <span className="text-xs tracking-[0.3em] font-medium">RESUME</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    </motion.a>
  );
};

export default ResumeTab;
