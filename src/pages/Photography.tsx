import React from 'react';
import PhotographyCarousel from '../components/PhotographyCarousel';
import WebLayout from '../layout/photographylayout/WebLayout';

const Photography: React.FC = () => {
  return (
    <div className="md:h-full h-[50%] w-full overflow-hidden">
    {/* Mobile Layout (default) */}
    {/* <div className="md:hidden h-full w-full">
      <MobileLayout>
        <div className="flex flex-col h-full overflow-hidden">
          <div className="w-full h-full overflow-hidden">
            <ScrollCarousel />
          </div>
        </div>{" "}
      </MobileLayout>
    </div> */}

    {/* Web Layout (md and up) */}
    <div className="hidden md:block h-full w-full">
      <WebLayout>
        <div className="flex flex-col h-full overflow-visible">
          <div className="h-full w-full overflow-visible text-white">
            <PhotographyCarousel />
          </div>
        </div>
      </WebLayout>
    </div>
  </div>
  );
};

export default Photography; 