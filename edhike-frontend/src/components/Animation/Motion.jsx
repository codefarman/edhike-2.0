import { motion, useReducedMotion } from "framer-motion";
import { useScrollDirection } from "../../useScrollDirection"

// Best easing for fast + buttery feel
const crispEase = [0.25, 0.8, 0.25, 1];

// Trigger animation earlier
const viewport = { once: false, margin: "-100px" };

// Helper to prevent reset on scroll DOWN
const useInitial = (initial) => {
  const { direction, isFirstRender } = useScrollDirection();
  return isFirstRender || direction === "up" ? initial : false;
};


/* ========================= */
/* BASIC FADE / SLIDE */
/* ========================= */

export const FadeInUp = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, y: 40 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInDown = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, y: -40 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, x: -60 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInRight = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, x: 60 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

/* ========================= */
/* SCALE / ZOOM / FLIP */
/* ========================= */

export const ScaleIn = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, scale: 0.9 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, scale: 0.85 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

export const FlipInX = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, rotateX: -80 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

/* ========================= */
/* BOUNCE / SLIDE */
/* ========================= */

export const BounceIn = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, scale: 0.6 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInBottom = ({ children, delay = 0 }) => {
  const initial = useInitial({ opacity: 0, y: 80 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease: crispEase }}
    >
      {children}
    </motion.div>
  );
};

/* ========================= */
/* STAGGER */
/* ========================= */

export const StaggerContainer = ({ children, delayChildren = 0.06 }) => {
  const initial = useInitial("hidden");

  return (
    <motion.div
      initial={initial}
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, ease: crispEase }}
  >
    {children}
  </motion.div>
);

/* ========================= */
/* TEXT REVEAL */
/* ========================= */

export const TextReveal = ({ children, delay = 0.2 }) => {
  const direction = useScrollDirection();
  const letters = Array.from(children);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      variants={container}
      initial={direction === "up" ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          transition={{ duration: 0.5, ease: crispEase }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ========================= */
/* PROGRESS BAR */
/* ========================= */

export const ProgressBar = ({ children, width = "90%", delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const initial = useInitial({ width: 0 });

  return (
    <motion.div
      initial={initial}
      whileInView={{ width }}
      viewport={viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.2,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "width", overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default {
  FadeInUp,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  ZoomIn,
  FlipInX,
  BounceIn,
  SlideInBottom,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  ProgressBar,
};


/** 
 import { motion, useReducedMotion } from "framer-motion";

// Smooth easing curves
const crispEase = [0.25, 0.46, 0.45, 0.94];
const smoothEase = [0.6, 0.05, 0.01, 0.99];

// REDUCED top margin slightly to prevent over-sensitivity while keeping buffer
const viewport = {
  once: false,
  margin: "-150px 0px -200px 0px",  // Less aggressive top margin
  amount: 0.4,
};

const viewportOnce = { once: true, margin: "-80px 0px -100px 0px", amount: 0.2 };

// Ensure all upward animations start BELOW (positive y)
export const FadeInUp = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}        // Clearly starts below — visible rise
      whileInView={{ opacity: 1, y: 0 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.0,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

// Only FadeInDown should come from the top
export const FadeInDown = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}       // Correct: starts above
      whileInView={{ opacity: 1, y: 0 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.0,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.0,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInRight = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.0,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.0,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.1,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const FlipInX = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -70 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.0,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ transformPerspective: 1000, willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const BounceIn = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={once ? viewportOnce : viewport}
      transition={
        prefersReducedMotion
          ? { duration: 0.2, ease: crispEase }
          : { type: "spring", stiffness: 300, damping: 20, delay }
      }
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInBottom = ({ children, delay = 0, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}       // Stronger upward motion from bottom
      whileInView={{ opacity: 1, y: 0 }}
      viewport={once ? viewportOnce : viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.1,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, delayChildren = 0.15, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : viewport}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : delayChildren,
            delayChildren: prefersReducedMotion ? 0 : 0.1,
          },
        },
      }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },     // Positive y — starts below
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: crispEase }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ children, delay = 0.2, once = false }) => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <span>{children}</span>;

  const text = typeof children === "string" ? children : String(children);
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-120px 0px -120px 0px", amount: 0.4 }}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          transition={{ duration: 0.6, ease: smoothEase }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const Float = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export const PulseGlow = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 20px rgba(229, 57, 53, 0.3)",
          "0 0 50px rgba(229, 57, 53, 0.7)",
          "0 0 20px rgba(229, 57, 53, 0.3)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const HoverScale = ({ children, scale = 1.05 }) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
    style={{ willChange: "transform", display: "inline-block" }}
  >
    {children}
  </motion.div>
);

export const HoverLift = ({ children, y = -8 }) => (
  <motion.div
    whileHover={{ y }}
    transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
    style={{ willChange: "transform", display: "block" }}
  >
    {children}
  </motion.div>
);

export const ProgressBar = ({ children, width = "90%", delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width }}
      viewport={viewport}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.4,
        delay: prefersReducedMotion ? 0 : delay,
        ease: crispEase,
      }}
      style={{ willChange: "width" }}
    >
      {children}
    </motion.div>
  );
};

export const InfiniteSlide = ({ children, duration = 35 }) => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div
      animate={{ x: [0, "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{ display: "flex", willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(42, 37, 116, 0.15)" }}
    transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
    className={className}
    style={{ willChange: "transform", display: "block" }}
  >
    {children}
  </motion.div>
);

export default {
  FadeInUp,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  ZoomIn,
  FlipInX,
  BounceIn,
  SlideInBottom,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  Float,
  PulseGlow,
  HoverScale,
  HoverLift,
  ProgressBar,
  InfiniteSlide,
  GlassCard,
};
 * **/