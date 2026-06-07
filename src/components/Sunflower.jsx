import { motion } from "framer-motion";

export default function Sunflower({ size = "3rem", className = "" }) {
  const anim = {
    rotate: [-6, 6, -6],
    y: [0, -8, 0],
    scale: [1, 1.06, 1]
  };

  const transition = {
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <motion.div
      className={className}
      style={{ fontSize: size, display: "inline-block", transformOrigin: "50% 70%" }}
      animate={anim}
      transition={transition}
    >
      🌻
    </motion.div>
  );
}
