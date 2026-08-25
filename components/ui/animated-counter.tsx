"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        count.set(value);
      } else {
        const controls = animate(count, value, {
          duration,
          ease: [0.16, 1, 0.3, 1], // energetic smooth easing
        });
        return controls.stop;
      }
    }
  }, [isInView, value, duration, count, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
