import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CarouselContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};

interface CarouselProviderProps {
  children: ReactNode;
}

export const CarouselProvider: React.FC<CarouselProviderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CarouselContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </CarouselContext.Provider>
  );
}; 