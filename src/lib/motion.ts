/** Varianti visibili subito per migliorare LCP e Speed Index. */
export const instantVisibleVariants = {
  hidden: { opacity: 1, y: 0, willChange: 'auto' as const },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto' as const,
    transition: { duration: 0 },
  },
};

export { motion, AnimatePresence, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/** Easing condivisa per tutte le animazioni del sito. */
export const EASE = [0.21, 0.47, 0.32, 0.98] as const;
