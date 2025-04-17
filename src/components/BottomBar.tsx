import React from "react";
import Connect from "./Connect";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "../context/CarouselContext";
import { carouselItems } from "./ScrollCarousel";

const BottomBar: React.FC = () => {
  const { activeIndex } = useCarousel();
  
  return (
    <div className="flex justify-start items-start absolute top-[82%]">
      <div className="text-md md:pr-8">
        <Connect />
      </div>
      
      <div className="text-slate flex-1 ml-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${activeIndex}`}
            className="text-[16px] md:text-[20px] text-blackboard-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {carouselItems[activeIndex].title}
          </motion.div>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${activeIndex}`}
            className="text-[14px] md:text-[14px] max-w-[800px] text-slate mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {carouselItems[activeIndex].description}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BottomBar;
