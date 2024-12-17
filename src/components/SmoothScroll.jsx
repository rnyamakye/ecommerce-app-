// src/SmoothScroll.js
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Use spring to smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  // Transform the scroll progress to a y value for motion
  const y = useTransform(smoothProgress, (value) => {
    const contentHeight = contentRef.current.scrollHeight; // Get the height of the content
    return value * -(contentHeight - window.innerHeight); // Calculate the y position
  });

  return (
    <motion.div ref={contentRef} style={{ y }} className="scrollBody">
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
