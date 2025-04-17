import React from "react";
import LandingCard from "../components/LandingCard";
import ScrollCarousel from "../components/ScrollCarousel";
import WebLayout from "../layout/WebLayout";
import MobileLayout from "../layout/MobileLayout";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* Mobile Layout (default) */}
      <div className="md:hidden h-full w-full">
        <MobileLayout>
          <LandingCard />
        </MobileLayout>
      </div>
      
      {/* Web Layout (md and up) */}
      <div className="hidden md:block h-full w-full">
        <WebLayout>
          <div className="flex flex-col h-full overflow-hidden">
            {/* <div className="h-screen">
              <LandingCard />
            </div> */}
            <div className="h-screen w-full overflow-hidden">
              <ScrollCarousel />
            </div>
          </div>
        </WebLayout>
      </div>
    </div>
  );
};

export default Home;
