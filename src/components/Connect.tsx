import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Connect: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const email = "alendennis44@gmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div 
      className="cursor-pointer absolute pl-8 md:pl-[70px] md:bottom-[10%] bottom-[14%] flex flex-col justify-start items-start h-max text-slate text-center text-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative flex items-center gap-4">
        {/* Mobile version - simple text */}
        <div className="md:hidden">
          Let's Connect
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 inline-block ml-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>

        {/* Web version - with animations */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            className="relative overflow-hidden"
          >
            <motion.span
              className="relative z-10 text-slate"
            >
              Let's Connect
            </motion.span>
            <motion.span
              className="absolute inset-0 z-20 text-white"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: isHovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
              transition={{ duration: 0.5 }}
            >
              Let's Connect
            </motion.span>
          </motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </motion.svg>
        </div>
      </div>
      
      {/* Email - only visible on web */}
      <div className="h-8 hidden md:block">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-white absolute"
            >
              {email}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Connect;
