"use client";

import { motion } from "motion/react";

type AnimateOnViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;
};

export default function AnimateOnView({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimateOnViewProps) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
