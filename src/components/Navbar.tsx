import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="flex items-center justify-between px-8 py-5">
        {/* Initials — gradient styled */}
        <motion.a
          href="#"
          className="text-lg font-bold tracking-widest text-gradient"
          style={{ fontFamily: "var(--font-mono)" }}
          whileHover={{ scale: 1.05 }}
        >
          SC
        </motion.a>

        {/* Center — LinkedIn */}
        <a
          href="https://linkedin.com/in/shrutichaturvedi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-xs tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors absolute left-1/2 -translate-x-1/2"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          linkedin.com/in/shrutichaturvedi
        </a>

        {/* Right — Nav items with gradient hover */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-xs font-medium tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary"
                  style={{ fontFamily: "var(--font-mono)" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://linkedin.com/in/shrutichaturvedi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary"
              >
                linkedin.com/in/shrutichaturvedi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
