import React from "react";
import { motion } from "framer-motion";

interface ISlideUpTransitionProps {
  children: React.ReactNode;
}

export default function SlideUpTransition({
  children,
}: ISlideUpTransitionProps) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: [0.4, 0.01, 0.165, 0.99] }}
    >
      {children}
    </motion.div>
  );
}
