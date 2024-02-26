"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Rbutton({ t }) {
  const [x, setX] = useState(0);

  return (
    <div className="Button flex-row">
    <motion.button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
      animate={{ x: [0, 1600, 0] }} // Values to create scrolling
      transition={{
        duration: 10, // 10-second animation
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {t}
    </motion.button>
    </div>
  );
}
