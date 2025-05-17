import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCarousel } from "../context/CarouselContext";
import agletmain from "../assets/images/agletmain.png";
import anchalmain from "../assets/images/anchalmain.png";
import kettohand from "../assets/images/kettohand.png";

interface CarouselItem {
  id: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  component?: React.ReactNode;
}

const carouselItems: CarouselItem[] = [
  {
    id: 0,
    imageUrl: agletmain,
    title: "Photo 1",
  },
  {
    id: 1,
    imageUrl: anchalmain,
    title: "Photo 2",
  },
  {
    id: 2,
    imageUrl: kettohand,
    title: "Photo 3",
  },
  {
    id: 3,
    imageUrl: anchalmain,
    title: "Photo 4",
  },
  {
    id: 4,
    imageUrl: agletmain,
    title: "Photo 5",
  },
];

const PhotographyCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setActiveIndex } = useCarousel();

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

  // Set initial active index to middle item
  React.useEffect(() => {
    const middleIndex = Math.floor(carouselItems.length / 2);
    setActiveIndex(middleIndex);
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
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        const newIndex = activeIndex + direction;
        if (newIndex >= 0 && newIndex < carouselItems.length) {
          setActiveIndex(newIndex);
        }
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
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
                    className="w-full h-full overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0.7,
                      scale: index === activeIndex ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
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
