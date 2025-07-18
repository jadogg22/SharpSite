import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function CountUp({ from = 0, to, duration = 1, suffix = "" }: CountUpProps) {
  const count = useMotionValue(from);
  const displayedValue = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration });
    }
  }, [count, to, duration, inView]);

  return <motion.span ref={ref}>{displayedValue}</motion.span>;
}