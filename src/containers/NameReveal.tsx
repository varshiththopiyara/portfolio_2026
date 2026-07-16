import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NameReveal() {
  const names = [
    "瓦尔希斯", // Chinese
    "바르시스", // Korean
    "வர்ஷித்", // Tamil
    "വർഷിത്", // Malayalam
    "ವರ್ಷಿತ್", // Kannada
    "Varshith",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === names.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center font-monsieur">
      <AnimatePresence mode="wait">
        <motion.h1
          key={names[index]}
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -40,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            font-playfair
            text-5xl
            md:text-9xl
            text-blue-500
          "
        >
          {names[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default NameReveal;
