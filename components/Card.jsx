"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hover = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
