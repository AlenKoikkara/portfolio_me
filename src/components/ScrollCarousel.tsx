import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCarousel } from '../context/CarouselContext';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "React | Redux | Node.js | MongoDB | AWS Lambda | EC2 | GitHub Actions",
    description: "I build this e-commerce platform to learn more about fullstack. I chose the MERN stack, with Firebase for authentication and simulated stripe payments through their webhooks. Later i set up Github actions for deployement in both frontend and backend. The backend is serverless, deployed on AWS Lambda, and frontend is hosted on EC2.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces that enhance user experience.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Photography",
    description: "Capturing moments and creating visual stories through the lens.",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Innovation",
    description: "Pushing boundaries and exploring new technologies to solve complex problems.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
  }
];

// Export carouselItems so it can be used in BottomBar
export { carouselItems };

const ScrollCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setActiveIndex } = useCarousel();
  
  // Handle scroll events within the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const itemHeight = container.clientHeight;
      const newIndex = Math.round(scrollPosition / itemHeight);
      
      if (newIndex >= 0 && newIndex < carouselItems.length) {
        setActiveIndex(newIndex);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [setActiveIndex]);

  // Handle wheel events from anywhere on the page
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        // Prevent default scrolling behavior
        e.preventDefault();
        
        // Scroll the container based on wheel delta
        containerRef.current.scrollTop += e.deltaY;
        
        // Update active index
        const scrollPosition = containerRef.current.scrollTop;
        const itemHeight = containerRef.current.clientHeight;
        const newIndex = Math.round(scrollPosition / itemHeight);
        
        if (newIndex >= 0 && newIndex < carouselItems.length) {
          setActiveIndex(newIndex);
        }
      }
    };
    
    // Add event listener to the window
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [setActiveIndex]);

  // Scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      const itemHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({
        top: index * itemHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Scrollable content container with only images */}
      <div 
        ref={containerRef} 
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{ 
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          height: '100%'
        }}
      >
        {carouselItems.map((item) => (
          <div 
            key={item.id}
            className="w-full h-full flex items-center justify-center snap-start"
          >
            {/* Full width and height image */}
            <motion.div 
              className="w-full h-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {item.imageUrl && (
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots on the right side */}
      <div className="absolute right-50 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={`w-8 h-8 flex items-center justify-center transition-all duration-300 text-sm cursor-pointer dark:text-white text-blackboard-black`}
            style={{
              color: activeIndex !== idx ? 'var(--color-slate)' : '',
              transform: activeIndex === idx ? 'scale(1.7)' : 'scale(1)',
              opacity: activeIndex === idx ? 1 : 0.7
            }}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {String(idx + 1).padStart(2, '0')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollCarousel; 