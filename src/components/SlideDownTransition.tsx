import React from "react";
import { motion } from "framer-motion";

interface ISlideDownTransitionProps {
  children: React.ReactNode;
}

export default function SlideDownTransition({
  children,
}: ISlideDownTransitionProps) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
