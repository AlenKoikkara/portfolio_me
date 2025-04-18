import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import agletmain from "../assets/agletmain.png";
import agletphone from "../assets/agletphones.webm";

const images = [
  {
    type: "image",
    url: agletmain,
  },
  {
    type: "video",
    url: agletphone,
  },
];

const Aglet: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Video will play/pause when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [currentIndex]);

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
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + images.length) % images.length
    );
  };

  return (
    <div className="relative w-[99.9%] h-[99.7%] overflow-hidden">
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
            opacity: { duration: 1.2 },
          }}
          className="absolute w-full h-full right-0 flex items-center justify-center"
        >
          {images[currentIndex].type === 'image' ? (
            <img
              src={images[currentIndex].url}
              alt="Aglet"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
            ref={videoRef}
              src={images[currentIndex].url}
              muted
              playsInline
              className="h-[110%] absolute right-0 object-contain"
            />
          )}
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
              index === currentIndex ? "bg-aglet scale-125" : "bg-slate"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Aglet;
