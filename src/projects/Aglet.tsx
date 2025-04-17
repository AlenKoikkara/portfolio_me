import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import agletmain from '../assets/agletmain.png';

const images = [
  {
    url: agletmain,
    description: 'Discover the wonders of natural landscapes'
  },
  {
    url: agletmain,
    description: 'Experience the vibrant energy of city living'
  },
  {
    url: agletmain,
    description: 'Exploring the future of technology'
  }
];

const Aglet: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative w-[99.9%] h-[99.7%] overflow-hidden bg-black">
      <motion.div 
        className="absolute top-5 left-5 text-white z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-regular mb-2">aglet</h2>
        <div className="text-aglet text-sm">Full stack e-commerce platform</div>
      </motion.div>
      
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 150, damping: 20 },
            opacity: { duration: 1.2 }
          }}
          className="absolute w-full h-full"
        >
          <img 
            src={images[currentIndex].url} 
            alt="Aglet" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 left-5 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const newDirection = index > currentIndex ? 1 : -1;
              paginate(newDirection);
            }}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-aglet scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Aglet;