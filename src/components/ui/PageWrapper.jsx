import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps each page with a framer-motion enter/exit transition and sets the
 * document <title>/<meta description> via React 19 native head hoisting.
 */
export default function PageWrapper({ title, description, children }) {
  const reduce = useReducedMotion();

  const variants = reduce
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
      };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {children}
    </motion.div>
  );
}
