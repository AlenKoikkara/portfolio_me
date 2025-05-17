import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "../context/CarouselContext";

import img1 from "../assets/photography/img1.png"
import img2 from "../assets/photography/img2.png"
import img3 from "../assets/photography/img3.png"
import img4 from "../assets/photography/img4.png"
import img5 from "../assets/photography/img5.png"
import img6 from "../assets/photography/img6.png"
import img7 from "../assets/photography/img7.png"

interface CarouselItem {
  id: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  component?: React.ReactNode;
  date?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 0,
    imageUrl: img1,
    title: "Photo 1",
    date: "2024"
  },
  {
    id: 1,
    imageUrl: img2,
    title: "Photo 2",
    date: "2024"
  },
  {
    id: 2,
    imageUrl: img3,
    title: "Photo 3",
    date: "2024"
  },
  {
    id: 3,
    imageUrl: img4,
    title: "Photo 4",
    date: "2024"
  },
  {
    id: 4,
    imageUrl: img5,
    title: "Photo 5",
    date: "2024"
  },
  {
    id: 5,
    imageUrl: img6,
    title: "Photo 6",
    date: "2024"
  },
  {
    id: 6,
    imageUrl: img7,
    title: "Photo 7",
    date: "2024"
  },
];

const PhotographyCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setActiveIndex } = useCarousel();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate width for each slide
  const [containerWidth, setContainerWidth] = React.useState(0);
  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set initial active index to first item
  React.useEffect(() => {
    setActiveIndex(0);
  }, [setActiveIndex]);

  // Animate x position based on activeIndex
  const x = -activeIndex * containerWidth;

  // Drag end handler for gallery
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = containerWidth / 4; // 25% of width to trigger a slide change
    if (info.offset.x < -threshold && activeIndex < carouselItems.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Handle scroll events within the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex >= 0 && newIndex < carouselItems.length) {
        setActiveIndex(newIndex);
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [setActiveIndex]);

  // Handle wheel events from anywhere on the page
  useEffect(() => {
    let accumulatedScroll = 0;
    const SCROLL_THRESHOLD = 100; // Need to scroll this much to trigger a slide change
    
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        e.preventDefault();
        accumulatedScroll += e.deltaY;
        
        if (Math.abs(accumulatedScroll) >= SCROLL_THRESHOLD) {
          const direction = accumulatedScroll > 0 ? 1 : -1;
          const newIndex = activeIndex + direction;
          
          if (newIndex >= 0 && newIndex < carouselItems.length) {
            setActiveIndex(newIndex);
          }
          accumulatedScroll = 0; // Reset after slide change
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex, setActiveIndex]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Image Carousel */}
      <div className="flex-1 w-full relative overflow-hidden">
        <div
          ref={containerRef}
          className="w-full h-full relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 h-full flex"
            style={{ width: `${carouselItems.length * 100}%` }}
            drag="x"
            dragConstraints={{
              left: -(carouselItems.length - 1) * containerWidth,
              right: 0,
            }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            animate={{ x }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
              velocity: 0,
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`w-full h-full flex-shrink-0 flex items-center justify-center snap-start transition-opacity duration-300 ${
                  Math.abs(index - activeIndex) <= 1
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                style={{ width: containerWidth }}
              >
                {item.component ? (
                  <motion.div
                    className="w-full h-full overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0.7,
                      scale: index === activeIndex ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.component}
                  </motion.div>
                ) : (
                  <motion.div
                    className="w-full h-full overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0.7,
                      scale: index === activeIndex ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={carouselItems[activeIndex].imageUrl}
                alt={carouselItems[activeIndex].title}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-0 right-4 text-white text-2xl hover:text-gray-300 cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title and Date Display */}
      <div className="absolute bottom-0 left-0 py-8 text-white">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-regular">{carouselItems[activeIndex].title}</h2>
          <p className="text-slate text-sm">{carouselItems[activeIndex].date}</p>
        </motion.div>
      </div>

      {/* Scale Carousel */}
      <div className="absolute px-[450px] bottom-0 left-0 w-full h-32 flex items-center justify-center">
        <div className="relative w-48 h-12 flex items-center justify-center">
          <motion.div
            className="absolute flex items-center justify-center"
            animate={{ x: -activeIndex * 160 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
              velocity: 0,
            }}
          >
            {carouselItems.map((_, index) => {
              const isActive = index === activeIndex;
              const isAdjacent = Math.abs(index - activeIndex) === 1;
              const isVisible = isActive || isAdjacent;
              
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-300 ${
                    isActive
                      ? "opacity-100"
                      : isAdjacent
                      ? "opacity-70"
                      : "opacity-0"
                  }`}
                  style={{
                    left: `${index * 160}px`,
                    transform: "translateX(-50%)",
                    visibility: isVisible ? "visible" : "hidden",
                  }}
                >
                  <span className="text-sm font-regular">
                    {String(index).padStart(2, "0")}
                  </span>
                  <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex items-end gap-4">
                    {/* Left small lines */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={`left-${i}`}
                        className={`h-1 w-[.5px] transition-all duration-300 ${
                          isActive ? "bg-white" : "bg-gray-400"
                        }`}
                      />
                    ))}
                    {/* Active line */}
                    <div
                      className={`h-3 w-[.5px] transition-all duration-300 ${
                        isActive ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                    {/* Right small lines */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={`right-${i}`}
                        className={`h-1 w-[1px] transition-all duration-300 ${
                          isActive ? "bg-white" : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyCarousel;
