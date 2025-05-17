import React from 'react';
import PhotographyCarousel from '../components/PhotographyCarousel';
import WebLayout from '../layout/photographylayout/WebLayout';
import agletmain from "../assets/images/agletmain.png";

// Sample photos - replace with your actual photos
const photos = [
  {
    id: 1,
    imageUrl: agletmain,
    subtitle: 'Sunset at the Beach'
  },
  {
    id: 2,
    imageUrl: agletmain,
    subtitle: 'Mountain Landscape'
  },
  {
    id: 3,
    imageUrl: agletmain,
    subtitle: 'Urban Architecture'
  },
  {
    id: 4,
    imageUrl: agletmain,
    subtitle: 'Nature Close-up'
  },
  {
    id: 5,
    imageUrl: agletmain,
    subtitle: 'Street Photography'
  }
];

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
        <div className="flex flex-col h-full overflow-hidden">
          <div className="h-screen w-full overflow-hidden text-white">
            <PhotographyCarousel photos={photos} />
          </div>
        </div>
      </WebLayout>
    </div>
  </div>
  );
};

export default Photography; 