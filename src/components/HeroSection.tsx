import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import waveImg from "@/assets/wave-hd.png";
import laptopImg from "@/assets/laptop-hd.png";

const TITLES = [
  "SOFTWARE DEVELOPER",
  "COMMUNITY LEADER",
  "CS STUDENT",
  "DEVELOPER",
];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Memoji parallax on scroll
  const memojiY = useTransform(smoothProgress, [0, 0.5], [0, 120]);
  const memojiScale = useTransform(smoothProgress, [0, 0.5], [1, 0.6]);
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const marqueeOpacity = useTransform(smoothProgress, [0, 0.15], [0.04, 0]);

  // Crossfade between wave and laptop memoji on scroll
  const waveOpacity = useTransform(smoothProgress, [0.15, 0.35], [1, 0]);
  const laptopOpacity = useTransform(smoothProgress, [0.25, 0.45], [0, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative h-[140vh] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-lavender/15 blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-peach/10 blur-[120px]" />
      </div>

      {/* Scrolling marquee text behind memoji */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none"
        style={{ opacity: marqueeOpacity }}
      >
        <div className="animate-marquee whitespace-nowrap flex">
          {[...TITLES, ...TITLES, ...TITLES, ...TITLES].map((t, i) => (
            <span
              key={i}
              className="text-[8vw] font-bold tracking-tight mx-8 text-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t} •
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content — centered memoji + text flanking */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        {/* MASSIVE Memoji with scroll crossfade */}
        <motion.div
          style={{ y: memojiY, scale: memojiScale }}
          className="relative"
        >
          {/* Subtle cursor tracking — only slight tilt, NOT flipping */}
          <motion.div
            animate={{
              x: mousePos.x * 8,
              y: mousePos.y * 5,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
          >
            {/* Glow behind memoji */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/25 blur-[80px]" />

            {/* Wave memoji — fades out on scroll */}
            <motion.img
              src={waveImg}
              alt="Shruti waving"
              className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] object-contain"
              style={{
                opacity: waveOpacity,
                filter: "drop-shadow(0 40px 80px rgba(200, 100, 180, 0.25))",
              }}
              initial={{ opacity: 0, scale: 0.3, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.15 }}
            />

            {/* Laptop memoji — fades in on scroll */}
            <motion.img
              src={laptopImg}
              alt="Shruti on laptop"
              className="absolute inset-0 w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] object-contain"
              style={{
                opacity: laptopOpacity,
                filter: "drop-shadow(0 40px 80px rgba(200, 100, 180, 0.25))",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text flanking memoji */}
        <motion.div
          className="absolute inset-0 flex items-center justify-between px-8 md:px-16 lg:px-24 pointer-events-none"
          style={{ opacity: textOpacity }}
        >
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-left"
          >
            <p
              className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-primary mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Hello! I'm
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] uppercase tracking-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              SHRUTI
              <br />
              CHATURVEDI
            </h1>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-right hidden md:block"
          >
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              CS @ Dalhousie &
            </p>
            <p
              className="text-3xl lg:text-5xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-gradient">DEVELOPER</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ opacity: textOpacity }}
      >
        <div className="w-6 h-10 rounded-full border border-primary/40 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2.5 rounded-full bg-primary/60"
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
